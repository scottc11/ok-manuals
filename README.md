# OK200 Manuals

https://scottc11.github.io/ok-manuals/

## Deployment
Deployed using Vercel. Pushing anything to master branch will trigger a deployment.

## Tech stack
- React
- TypeScript
- Sass
- (Tailwind)[https://v3.tailwindcss.com/docs/installation]
- Webpack
- (Resend email service)[https://resend.com/emails] (account: business email)
- (Vercel)[https://vercel.com/scott-campbells-projects/ok200] (Server) (account: business email)
- Stripe checkout (stripe hosted e-commerce)
- Google Sheets
- Google cloud console (Sheets API)
- (Contentful)[https://app.contentful.com/spaces/3852y1mxtp1y/views/entries] (account: business email)
- (MailChimp)[https://us18.admin.mailchimp.com/] (account: business email)

### Google Sheets
A service account in Google Cloud Console had to be made to interact with the google sheets API. You will need the "private_key" associated with this service account for an environemnet variable. You can find the service account in the OK200 google cloud console project "Website" (Service Accounts tab). 

The google sheet beeing used should be labelled "Newsletter Subscriptions" and should have the ID `11ln697Gu7Y8_WvB9SXXQZOjfBUlgZD29W00LhFAxUIY`

Google Cloud Project: "charming-scarab-466410-p8",
"client_email": "newsletter-service@charming-scarab-466410-p8.iam.gserviceaccount.com",

## Environment Variables
`STRIPE_SECRET_KEY=`
`RESEND_API_KEY=`
`API_DOMAIN=https://ok200.vercel.app`
`GOOGLE_SHEET_ID=11ln697Gu7Y8_WvB9SXXQZOjfBUlgZD29W00LhFAxUIY`
`GOOGLE_CLIENT_EMAIL=your_service_account_email_here`
`GOOGLE_PRIVATE_KEY_BASE64=base64_encode_your_google_private_key` (no quotations needed)
`CONTENTFUL_SPACE_ID=someid`
`CONTENTFUL_ACCESS_TOKEN=someaccesstoken`


### Stripe Checkout

Shipping rate: https://dashboard.stripe.com/acct_1GiKgAKOFOq2EOfO/test/shipping-rates
Return URL
