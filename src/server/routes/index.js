const express = require('express');
const { google } = require('googleapis');
const { Resend } = require('resend');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// Shared clients
const resend = new Resend(process.env.RESEND_API_KEY);

// Countries allowed for Stripe shipping (copied from former handler)
const allowedCountries = ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW', 'ZZ'];

async function getCountryFromIP(ip) {
	try {
		if (ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
			return 'Local';
		}
		const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		if (data.status === 'success' && data.country) {
			return data.country;
		}
		return 'Unknown';
	} catch {
		return 'Unknown';
	}
}

// GET /api/products
router.get('/products', async (req, res) => {
	try {
		const products = await stripe.products.list({
			active: true,
			expand: ['data.default_price']
		});

		const formattedProducts = products.data.map(product => {
			const price = product.default_price;
			return {
				id: product.id,
				name: product.name,
				description: product.description,
				price: price ? price.unit_amount : 0,
				currency: price ? price.currency : 'usd',
				image: product.images && product.images.length > 0 ? product.images[0] : undefined,
				stock: product.metadata?.stock ? parseInt(product.metadata.stock) : undefined,
				metadata: product.metadata
			};
		});

		res.status(200).json({
			success: true,
			products: formattedProducts
		});
	} catch (error) {
		console.error('Error fetching products:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to fetch products',
			details: error.message
		});
	}
});

// GET /api/verify-session
router.get('/verify-session', async (req, res) => {
	try {
		const { session_id } = req.query;
		if (!session_id) {
			return res.status(400).json({
				success: false,
				error: 'Session ID is required'
			});
		}

		const session = await stripe.checkout.sessions.retrieve(session_id, {
			expand: ['line_items']
		});

		res.status(200).json({
			success: true,
			session: {
				id: session.id,
				payment_status: session.payment_status,
				customer_email: session.customer_details?.email,
				amount_total: session.amount_total,
				currency: session.currency,
				line_items: session.line_items?.data || [],
				metadata: session.metadata
			}
		});
	} catch (error) {
		console.error('Error verifying session:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to verify session',
			details: error.message
		});
	}
});

// POST /api/create-checkout-session
router.post('/create-checkout-session', async (req, res) => {
	try {
		const { items } = req.body;
		if (!items || !Array.isArray(items) || items.length === 0) {
			return res.status(400).json({
				success: false,
				error: 'Cart items are required'
			});
		}

		const lineItems = items.map(item => ({
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.name,
					images: item.image ? [item.image] : []
				},
				unit_amount: item.price
			},
			quantity: item.quantity
		}));

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			shipping_address_collection: {
				allowed_countries: allowedCountries
			},
			shipping_options: [
				{
					shipping_rate: 'shr_1SJIXDKOFOq2EOfOYWgMhBCR'
				}
			],
			currency: 'usd',
			line_items: lineItems,
			mode: 'payment',
			success_url: `${req.headers.origin}/#/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${req.headers.origin}/#/cart`,
			allow_promotion_codes: true,
			metadata: {
				cart_items: JSON.stringify(
					items.map(item => ({
						productId: item.productId,
						quantity: item.quantity
					}))
				)
			}
		});

		res.status(200).json({
			success: true,
			session_id: session.id,
			url: session.url
		});
	} catch (error) {
		console.error('Error creating checkout session:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to create checkout session',
			details: error.message
		});
	}
});

// POST /api/newsletter-signup
router.post('/newsletter-signup', async (req, res) => {
	try {
		const clientIP =
			req.headers['x-forwarded-for']?.split(',')[0] ||
			req.headers['x-real-ip'] ||
			req.connection?.remoteAddress ||
			'unknown';

		if (req.body.website && req.body.website.trim() !== '') {
			console.log(`Honeypot triggered from IP: ${clientIP} at ${new Date().toISOString()}`);
			return res.status(400).json({
				error: 'Invalid submission',
				message: 'Please try again'
			});
		}

		const { name, email } = req.body;
		if (!name || !email) {
			return res.status(400).json({ error: 'Name and email are required' });
		}

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

		const sanitizedName = String(name)
			.trim()
			.replace(/[<>"'&]/g, '')
			.replace(/\s+/g, ' ');
		const sanitizedEmail = String(email).trim().toLowerCase();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(sanitizedEmail)) {
			return res.status(400).json({ error: 'Invalid email format' });
		}

		const country = await getCountryFromIP(clientIP);

		let privateKey;
		if (process.env.GOOGLE_PRIVATE_KEY_BASE64) {
			privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString();
		} else if (process.env.GOOGLE_PRIVATE_KEY) {
			privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
		}

		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_CLIENT_EMAIL,
				private_key: privateKey
			},
			scopes: ['https://www.googleapis.com/auth/spreadsheets']
		});

		const sheets = google.sheets({ version: 'v4', auth });
		const spreadsheetId = process.env.GOOGLE_SHEET_ID;

		const existingData = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range: 'Sheet1!A:F'
		});
		const existingRows = existingData.data.values || [];

		const emailAlreadyExists = existingRows.some(
			row => row[2] && row[2].toLowerCase() === sanitizedEmail
		);
		if (emailAlreadyExists) {
			return res.status(409).json({
				error: 'Email already subscribed',
				message: 'This email address is already subscribed.'
			});
		}

		const now = Date.now();
		const oneHour = 60 * 60 * 1000;
		const maxSubmissionsPerHour = 3;
		const recentSubmissionsFromIP = existingRows.filter(row => {
			if (!row[0] || !row[4]) return false;
			const submissionTime = new Date(row[0]).getTime();
			const submissionIP = row[4];
			return (
				submissionIP === clientIP &&
				submissionTime > now - oneHour &&
				!isNaN(submissionTime)
			);
		});
		if (recentSubmissionsFromIP.length >= maxSubmissionsPerHour) {
			console.log(
				`Rate limit exceeded for IP: ${clientIP}. Recent submissions: ${recentSubmissionsFromIP.length}`
			);
			return res.status(429).json({
				error: 'Too many requests',
				message:
					'Please wait before submitting again. Maximum 3 submissions per hour allowed.'
			});
		}

		const range = 'Sheet1!A:F';
		const timestamp = new Date().toISOString();
		const values = [[timestamp, sanitizedName, sanitizedEmail, true, clientIP, country]];

		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range,
			valueInputOption: 'USER_ENTERED',
			insertDataOption: 'INSERT_ROWS',
			resource: { values }
		});

		console.log(
			`Newsletter signup: ${sanitizedEmail} from IP: ${clientIP} (${country}) at ${timestamp}`
		);

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
});

// POST /api/newsletter-unsubscribe
router.post('/newsletter-unsubscribe', async (req, res) => {
	try {
		if (req.body.website && req.body.website.trim() !== '') {
			console.log(`Unsubscribe honeypot triggered at ${new Date().toISOString()}`);
			return res.status(400).json({
				error: 'Invalid submission',
				message: 'Please try again'
			});
		}

		const { email } = req.body;
		if (!email) {
			return res.status(400).json({
				error: 'Email required',
				message: 'Please provide an email address to unsubscribe'
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const sanitizedEmail = String(email).trim().toLowerCase();
		if (!emailRegex.test(sanitizedEmail)) {
			return res.status(400).json({
				error: 'Invalid email format',
				message: 'Please provide a valid email address'
			});
		}

		let privateKey;
		if (process.env.GOOGLE_PRIVATE_KEY_BASE64) {
			privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString();
		} else if (process.env.GOOGLE_PRIVATE_KEY) {
			privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
		}

		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_CLIENT_EMAIL,
				private_key: privateKey
			},
			scopes: ['https://www.googleapis.com/auth/spreadsheets']
		});

		const sheets = google.sheets({ version: 'v4', auth });
		const spreadsheetId = process.env.GOOGLE_SHEET_ID;

		const existingData = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range: 'Sheet1!A:F'
		});
		const rows = existingData.data.values || [];

		let targetRowIndex = -1;
		let targetRow = null;
		for (let i = 0; i < rows.length; i++) {
			const row = rows[i];
			if (row[2] && row[2].toLowerCase() === sanitizedEmail) {
				targetRowIndex = i + 1;
				targetRow = row;
				break;
			}
		}

		if (targetRowIndex === -1) {
			return res.status(404).json({
				error: 'Email not found',
				message: 'This email address is not subscribed to our newsletter'
			});
		}

		const currentSubscriptionStatus = targetRow[3];
		if (
			currentSubscriptionStatus === false ||
			currentSubscriptionStatus === 'FALSE' ||
			currentSubscriptionStatus === 'false'
		) {
			return res.status(409).json({
				error: 'Already unsubscribed',
				message: 'This email address is already unsubscribed'
			});
		}

		const cellRange = `Sheet1!D${targetRowIndex}`;
		await sheets.spreadsheets.values.update({
			spreadsheetId,
			range: cellRange,
			valueInputOption: 'USER_ENTERED',
			resource: { values: [['FALSE']] }
		});

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
});

// POST /api/contact
router.post('/contact', async (req, res) => {
	try {
		const { name, email, subject, message } = req.body;
		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				error: 'Name, email, and message are required'
			});
		}

		const emailData = await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: ['scott@ok200.ca'],
			subject: subject || `Contact Form: Message from ${name}`,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <h3>Message:</h3>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
			reply_to: email
		});

		res.status(200).json({
			success: true,
			message: 'Email sent successfully',
			id: emailData?.id || 'no-id-returned',
			debug: {
				hasId: !!emailData?.id,
				emailDataKeys: Object.keys(emailData || {})
			}
		});
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to send email',
			details: error.message
		});
	}
});

module.exports = router;


