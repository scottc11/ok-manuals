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
        const { name, email } = req.body;

        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
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

        // Check for duplicate email by reading existing data
        const existingData = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!C:C', // Column C contains emails
        });

        const existingEmails = existingData.data.values || [];
        const emailAlreadyExists = existingEmails.some(row => 
            row[0] && row[0].toLowerCase() === email.toLowerCase()
        );

        if (emailAlreadyExists) {
            return res.status(409).json({ 
                error: 'Email already subscribed',
                message: 'This email address is already subscribed.' 
            });
        }

        // Add data to the spreadsheet
        const range = 'Sheet1!A:D'; // Columns A, B, C, D for timestamp, name, email, subscribed

        const timestamp = new Date().toISOString();
        const values = [[timestamp, name, email, true]]; // Added boolean true for "Subscribed" column

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values,
            },
        });

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