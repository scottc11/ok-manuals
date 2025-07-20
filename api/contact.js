// For sending emails, we'll use Resend (recommended) or SendGrid
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { name, email, subject, message } = req.body;
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required',
      });
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
      to: ['scott@ok200.ca'], // Fixed: .ca instead of .com
      subject: subject || `Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      reply_to: email,
    });

    console.log('Email send result:', emailData);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: emailData?.id || 'no-id-returned',
      debug: {
        hasId: !!emailData?.id,
        emailDataKeys: Object.keys(emailData || {}),
      },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email',
      details: error.message,
    });
  }
}