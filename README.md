# CropIntel Website

Public company website for CropIntel, built with Next.js, React, TypeScript, Tailwind CSS, and Resend.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3050](http://localhost:3050).

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Required for the Contact page:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=cofounder@example.com
```

`CONTACT_EMAIL` is the cofounder inbox that receives contact form submissions.

## Contact Form Setup

The Contact page posts to the Next.js route handler at `/api/contact`. The backend route sends email through Resend, so the Resend API key is never exposed to frontend code.

1. Create a free Resend account at [https://resend.com/](https://resend.com/).
2. In Resend, open **API Keys** and create an API key.
3. Add the key to `.env.local` as `RESEND_API_KEY`.
4. Add the cofounder email as `CONTACT_EMAIL`.
5. Restart the app with `npm run dev`.
6. Open [http://localhost:3050/contact](http://localhost:3050/contact) and submit the form.

Resend's default testing sender is `onboarding@resend.dev`. For production sending from a CropIntel address, verify a sending domain in Resend and update the `from` address in `app/api/contact/route.ts`.

## Project Layout

- `app/` - Next.js App Router pages and route handlers
- `components/` - Shared React components
- `lib/siteContent.ts` - Editable company, product, team, FAQ, and navigation content
- `public/brand/` - CropIntel brand assets used by the website

## Build

```bash
npm run build
```
