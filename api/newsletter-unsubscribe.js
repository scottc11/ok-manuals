const { google } = require('googleapis');

// Export for both Vercel and local development
module.exports = { default: handler };

async function handler(req, res) {
    // Set CORS headers
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
        // HONEYPOT FIELD VALIDATION
        // ==========================================
        // Reuse the same anti-spam protection from signup
        
        if (req.body.website && req.body.website.trim() !== '') {
            console.log(`Unsubscribe honeypot triggered at ${new Date().toISOString()}`);
            return res.status(400).json({ 
                error: 'Invalid submission',
                message: 'Please try again' 
            });
        }

        const { email } = req.body;

        // ==========================================
        // INPUT VALIDATION
        // ==========================================
        
        if (!email) {
            return res.status(400).json({ 
                error: 'Email required',
                message: 'Please provide an email address to unsubscribe' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const sanitizedEmail = email.trim().toLowerCase();
        
        if (!emailRegex.test(sanitizedEmail)) {
            return res.status(400).json({ 
                error: 'Invalid email format',
                message: 'Please provide a valid email address' 
            });
        }

        // Set up Google Sheets authentication
        let privateKey;
        
        if (process.env.GOOGLE_PRIVATE_KEY_BASE64) {
            privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString();
        } else if (process.env.GOOGLE_PRIVATE_KEY) {
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
        // FIND EMAIL IN SPREADSHEET
        // ==========================================
        // Get all data to find the email
        // Column layout: A=timestamp, B=name, C=email, D=subscribed, E=IP, F=country
        
        const existingData = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!A:F',
        });

        const rows = existingData.data.values || [];
        
        // Find the row with matching email
        let targetRowIndex = -1;
        let targetRow = null;
        
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row[2] && row[2].toLowerCase() === sanitizedEmail) {
                targetRowIndex = i + 1; // Google Sheets is 1-indexed
                targetRow = row;
                break;
            }
        }

        // Check if email exists in the newsletter
        if (targetRowIndex === -1) {
            return res.status(404).json({ 
                error: 'Email not found',
                message: 'This email address is not subscribed to our newsletter' 
            });
        }

        // Check if already unsubscribed
        const currentSubscriptionStatus = targetRow[3]; // Column D = subscribed
        if (currentSubscriptionStatus === false || currentSubscriptionStatus === 'FALSE' || currentSubscriptionStatus === 'false') {
            return res.status(409).json({ 
                error: 'Already unsubscribed',
                message: 'This email address is already unsubscribed' 
            });
        }

        // ==========================================
        // UPDATE SUBSCRIPTION STATUS
        // ==========================================
        // Mark as unsubscribed (soft delete - keeps data for compliance/analytics)
        
        const cellRange = `Sheet1!D${targetRowIndex}`; // Update the subscribed column
        
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: cellRange,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [['FALSE']], // Set subscribed to FALSE
            },
        });

        // Log the unsubscribe for monitoring
        console.log(`Newsletter unsubscribe: ${sanitizedEmail}`);

        res.status(200).json({ 
            success: true, 
            message: 'Successfully unsubscribed from newsletter' 
        });

    } catch (error) {
        console.error('Error processing unsubscribe:', error);
        res.status(500).json({ 
            error: 'Failed to process unsubscribe',
            details: error.message 
        });
    }
} 