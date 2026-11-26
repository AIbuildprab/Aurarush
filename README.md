# AuraRush

Marketing site for AuraRush, a websites and marketing agency. Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

The site is organised around one idea: a business needs **attention**, then **conversion**, then **monetisation**, and attention comes from seven channels. Content for that model lives in `src/data/framework.ts`; services, case studies and insights are in `src/data/`.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Case study screenshots

Screenshots of the live client sites are captured with the Microsoft Edge that ships with Windows, then converted to WebP:

```bash
npm run capture:work            # all sites
npm run capture:work -- ninh-studio
```

Output goes to `public/work/<slug>/`. Open each image after capturing: a blank hero means the page needs a longer wait.

## Configuration

Copy `.env.example` to `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: the public URL, used for canonical links and the sitemap.
- `FORM_ENDPOINT`: where enquiries are posted as JSON (for example an n8n webhook). Without it the form returns a clear error and shows the email address instead.
- `BOOKING_URL` is set in `src/data/site.ts`. While empty, "Book a call" goes to the enquiry form.

## Before launch

Fill in `site.legal` in `src/data/site.ts`, add real team bios to `team`, have the legal pages reviewed, and replace the placeholder logo mark in `src/components/ui/logo.tsx` with the supplied vector logo.
