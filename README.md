# OK200 Manuals

https://scottc11.github.io/ok-manuals/

## Deployment
Deployed using Vercel. Pushing anything to master branch will trigger a deployment.

## Tech stack
- [Next.js](https://nextjs.org/) (App Router)
- React
- TypeScript
- Sass
- [Tailwind CSS](https://v3.tailwindcss.com/docs/installation)
- (Resend email service)[https://resend.com/emails] (account: business email)
- (Vercel)[https://vercel.com/scott-campbells-projects/ok200] (Server) (account: business email)
- Stripe checkout (stripe hosted e-commerce)
- Google Sheets
- Google cloud console (Sheets API)
- (Contentful)[https://app.contentful.com/spaces/3852y1mxtp1y/views/entries] (account: business email)
- (MailChimp)[https://us18.admin.mailchimp.com/] (account: business email)

## How the site works

This project uses the Next.js **App Router**. Every URL is a folder under `app/`, and the file named `page.tsx` in that folder is what Next.js renders for that path.

```
app/page.tsx                      →  /
app/about/page.tsx                →  /about
app/cart/page.tsx                 →  /cart
app/modules/page.tsx              →  /modules
app/modules/[slug]/page.tsx       →  /modules/counterpoint, /modules/degree, …
app/news/page.tsx                 →  /news
app/news/[date]/page.tsx          →  /news/2026-03-15, …
app/manuals/counterpoint/page.tsx →  /manuals/counterpoint
app/manuals/degree/page.tsx       →  /manuals/degree
```

`app/layout.tsx` wraps **every** page. It loads the site header, footer, optional message banner, and navigation, then renders the matched `page.tsx` as `{children}`. You do not put the header on each page individually.

Square-bracket folders (`[slug]`, `[date]`) are **dynamic segments**. Next.js takes the leftover part of the URL, passes it into the page as `params`, and the page uses that to fetch the right Contentful entry. If nothing matches, the page calls `notFound()`.

At build time, those dynamic pages also export `generateStaticParams()`, which asks Contentful “which slugs / dates exist?” so Next.js can pre-render a static HTML file for each one. Publishing new content in Contentful, then hitting the revalidation webhook, regenerates those pages without a full redeploy (see **On-demand revalidation** below).

### Static pages (hand-authored in code)

These routes are React components in the repo. Changing them requires a code change and a deploy.

| Path | Source |
|---|---|
| `/`, `/about`, `/cart`, `/success`, `/unsubscribe` | `app/<route>/page.tsx` |
| `/manuals/counterpoint` | `app/manuals/counterpoint/page.tsx` |
| `/manuals/degree` | `app/manuals/degree/page.tsx` |

The manuals are long-form documentation written directly in TSX (headings, diagrams, firmware updater, etc.). They are not stored in Contentful.

### Contentful-backed pages (data-driven)

These routes exist in `app/`, but **what they display** comes from Contentful at build / revalidation time.

| Path | Contentful type | How the URL is chosen |
|---|---|---|
| `/modules/[slug]` | `product` | Product `slug` field (e.g. `counterpoint`) |
| `/news` | `blogPost` | Index of published posts |
| `/news/[date]` | `blogPost` | Post `date` as `YYYY-MM-DD` (one post per day) |

`lib/contentful.ts` is the only place that talks to the Contentful API. Product pages pull nested content blocks (rich text, images, headings, YouTube) and render them through `ContentBlockContainer` / `ContentBlock`.

`/modules` itself is still a coded listing page; individual product URLs under it are the dynamic ones.

### Site navigation

The header links are **not** hardcoded. They come from a singleton Contentful entry of type `siteNavigation`.

1. `app/layout.tsx` calls `getSiteNavigation()` on the server.
2. That function reads `fields.navigation` from the latest `siteNavigation` entry (`lib/contentful.ts`).
3. The result is a `NavItem[]` (`lib/types.ts`) passed into `Header` as `links`.
4. `Header` (`app/components/Header.tsx`) renders each item. Items with `children` become a dropdown (hover on desktop, tap-to-expand on mobile). The cart icon stays in code; it is not part of the CMS nav.

Example shape of the JSON field in Contentful:

```json
[
  { "label": "Home", "href": "/", "exact": true },
  {
    "label": "Modules",
    "href": "/modules",
    "children": [
      { "label": "Counterpoint", "href": "/modules/counterpoint" },
      { "label": "DEGREE", "href": "/modules/degree" }
    ]
  },
  { "label": "News", "href": "/news" },
  { "label": "About", "href": "/about" }
]
```

`label` is required. `href` is optional on a parent that only opens a dropdown. `exact: true` means the link is highlighted only when the path matches exactly (used for Home). Nested items only go one level deep.

Editing and publishing that entry, then triggering revalidation, updates the header on every page because the layout is what gets revalidated.

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
`REVALIDATION_SECRET=some_random_secret_string`

### Contentful
Content is managed in [Contentful](https://app.contentful.com/spaces/3852y1mxtp1y/views/entries) and fetched at build time by Next.js server components.

**On-demand revalidation:** When content is published or unpublished in Contentful, a webhook sends a POST request to `/api/revalidate` which triggers Next.js to regenerate all cached pages. This means content updates appear on the live site without a full redeploy.

**Webhook setup (Settings > Webhooks in Contentful):**
- URL: `https://ok200.vercel.app/api/revalidate`
- Method: POST
- Custom header: `x-revalidation-secret` = the value of `REVALIDATION_SECRET` env var in Vercel
- Triggers: Entry publish, Entry unpublish

### Stripe Checkout

Shipping rate: https://dashboard.stripe.com/acct_1GiKgAKOFOq2EOfO/test/shipping-rates
Return URL
