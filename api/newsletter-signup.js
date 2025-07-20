const { google } = require('googleapis');

// Export for both Vercel and local development
module.exports = { default: handler };

async function handler(req, res) {
    // Set CORS headers (following your existing pattern)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
        return;
    }

    try {
        // ==========================================
        // 1. GOOGLE SHEETS-BASED RATE LIMITING
        // ==========================================
        // Purpose: Prevent spam using the Google Sheet itself to track IP submissions
        // How: Check recent submissions from same IP in the spreadsheet data
        
        const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || 
                        req.headers['x-real-ip'] || 
                        req.connection.remoteAddress || 
                        'unknown';

        // ==========================================
        // 4. HONEYPOT FIELD VALIDATION
        // ==========================================
        // Purpose: Catch bots that auto-fill all form fields
        // How: Check if hidden 'website' field was filled (humans won't see/fill it)
        
        if (req.body.website && req.body.website.trim() !== '') {
            // Log the attempt for monitoring (don't return specific error to avoid teaching bots)
            console.log(`Honeypot triggered from IP: ${clientIP} at ${new Date().toISOString()}`);
            return res.status(400).json({ 
                error: 'Invalid submission',
                message: 'Please try again' 
            });
        }

        const { name, email } = req.body;

        // ==========================================
        // 3. INPUT SANITIZATION & LENGTH LIMITS
        // ==========================================
        // Purpose: Prevent malicious input and ensure data quality
        // How: Validate field lengths, sanitize content, check for valid formats

        // Check if required fields exist
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Length validation - prevent extremely long inputs that could cause issues
        // Name: reasonable human name length (2-100 characters)
        // Email: RFC 5321 specifies max 254 characters for email addresses
        if (name.length < 2 || name.length > 100) {
            return res.status(400).json({ 
                error: 'Invalid name length',
                message: 'Name must be between 2 and 100 characters' 
            });
        }

        if (email.length > 254) {
            return res.status(400).json({ 
                error: 'Email too long',
                message: 'Email address is too long' 
            });
        }

        // Sanitize inputs to remove potentially harmful characters
        // Remove HTML/script injection attempts and normalize whitespace
        const sanitizedName = name
            .trim() // Remove leading/trailing whitespace
            .replace(/[<>"\'\&]/g, '') // Remove HTML special characters
            .replace(/\s+/g, ' '); // Normalize multiple spaces to single space

        const sanitizedEmail = email
            .trim() // Remove whitespace
            .toLowerCase(); // Normalize to lowercase for consistency

        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(sanitizedEmail)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Set up Google Sheets authentication
        let privateKey;
        
        // Try different methods to process the private key
        if (process.env.GOOGLE_PRIVATE_KEY_BASE64) {
            // Method 1: Base64 encoded private key (most reliable for Vercel)
            privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString();
        } else if (process.env.GOOGLE_PRIVATE_KEY) {
            // Method 2: Standard processing with improved newline handling
            privateKey = process.env.GOOGLE_PRIVATE_KEY
                .replace(/\\n/g, '\n')
                .replace(/\\\\/g, '\\');
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        // ==========================================
        // READ EXISTING DATA FOR DUPLICATE AND RATE LIMIT CHECKS
        // ==========================================
        // Get all existing data to check for duplicates AND rate limiting
        // Updated range to include IP column: A=timestamp, B=name, C=email, D=subscribed, E=IP
        const existingData = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!A:E', // Extended range to include IP column
        });

        const existingRows = existingData.data.values || [];
        
        // Check for duplicate email (column C = email)
        const emailAlreadyExists = existingRows.some(row => 
            row[2] && row[2].toLowerCase() === sanitizedEmail.toLowerCase()
        );

        if (emailAlreadyExists) {
            return res.status(409).json({ 
                error: 'Email already subscribed',
                message: 'This email address is already subscribed.' 
            });
        }

        // ==========================================
        // RATE LIMITING CHECK USING GOOGLE SHEETS DATA
        // ==========================================
        // Purpose: Check recent submissions from the same IP using existing sheet data
        // How: Filter sheet rows by IP and timestamp to count recent submissions
        
        const now = Date.now();
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
        const maxSubmissionsPerHour = 3;
        
        // Filter submissions from same IP in the last hour
        // Column layout: A=timestamp, B=name, C=email, D=subscribed, E=IP
        const recentSubmissionsFromIP = existingRows.filter(row => {
            if (!row[0] || !row[4]) return false; // Skip if no timestamp or IP
            
            const submissionTime = new Date(row[0]).getTime();
            const submissionIP = row[4];
            
            return submissionIP === clientIP && 
                   submissionTime > (now - oneHour) && 
                   !isNaN(submissionTime); // Valid timestamp
        });

        if (recentSubmissionsFromIP.length >= maxSubmissionsPerHour) {
            console.log(`Rate limit exceeded for IP: ${clientIP}. Recent submissions: ${recentSubmissionsFromIP.length}`);
            return res.status(429).json({ 
                error: 'Too many requests',
                message: 'Please wait before submitting again. Maximum 3 submissions per hour allowed.' 
            });
        }

        // ==========================================
        // ADD DATA TO SPREADSHEET WITH IP TRACKING
        // ==========================================
        // Add data to the spreadsheet using sanitized inputs + IP address
        // Updated range to include IP: A=timestamp, B=name, C=email, D=subscribed, E=IP
        const range = 'Sheet1!A:E'; 

        const timestamp = new Date().toISOString();
        const values = [[timestamp, sanitizedName, sanitizedEmail, true, clientIP]]; // Added IP to the data

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values,
            },
        });

        // Log successful signup for monitoring
        console.log(`Newsletter signup: ${sanitizedEmail} from IP: ${clientIP} at ${timestamp}`);

        res.status(200).json({ 
            success: true, 
            message: 'Successfully added to newsletter' 
        });

    } catch (error) {
        console.error('Error adding to newsletter:', error);
        res.status(500).json({ 
            error: 'Failed to add to newsletter',
            details: error.message 
        });
    }
} 