# CropIntel Website

Public website for CropIntel, built with Next.js 14, React, TypeScript, Tailwind CSS, and Firebase Hosting.

Live site:

```text
https://cropintel-home.web.app/
```

## Overview

This repo contains the public-facing CropIntel website:

- Home page
- Product overview
- How it works
- Download status page
- Team page with local team photos and LinkedIn profile links
- About page
- Contact page

The Firebase deployment is a static export. Server-only Next.js features such as API routes are not used in the deployed Hosting build.

## Local Development

Install dependencies:

```bash
npm install
```

Run the local Next.js dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3050
```

## Scripts

```bash
npm run dev
```

Starts the local development server on port `3050`.

```bash
npm run build
```

Runs a normal Next.js production build.

```bash
npm run build:hosting
```

Builds the static export used by Firebase Hosting. The output is written to `out/`.

```bash
npm run deploy:hosting
```

Builds the static export and deploys it to Firebase Hosting.

## Firebase Hosting

Firebase project:

```text
cropintel-home
```

Primary Hosting site:

```text
cropintel
```

Primary URL:

```text
https://cropintel.web.app
```

Important Firebase files:

- `.firebaserc` - maps the local repo to Firebase project `cropintel-home`
- `firebase.json` - configures Firebase Hosting to deploy the `out/` directory to site `cropintel`
- `.github/workflows/firebase-hosting-merge.yml` - deploys the live site on pushes to `main`
- `.github/workflows/firebase-hosting-pull-request.yml` - creates Firebase preview channels for pull requests

## Automatic Deployment

GitHub Actions is configured for Firebase Hosting.

When code is pushed to `main`, the workflow:

1. Checks out the repo
2. Sets up Node.js 20
3. Runs `npm ci`
4. Runs `npm run build:hosting`
5. Deploys the `out/` directory to Firebase Hosting

Manual deploy is still available:

```bash
npm run deploy:hosting
```

## Static Contact Page

The Contact page uses a client-side `mailto:` flow. It opens the visitor's email app with the message prefilled and addressed to:

```text
hello@cropintel.ai
```

There is no server-side contact API in the Firebase Hosting deployment.

## Project Layout

- `app/` - Next.js App Router pages and global styles
- `components/` - Shared React components
- `lib/siteContent.ts` - Editable company, product, team, FAQ, navigation, and footer content
- `lib/security/headers.ts` - Security headers used by Next middleware during non-static builds
- `public/brand/` - CropIntel brand assets
- `public/team/` - Local team profile photos
- `.github/workflows/` - Firebase Hosting deployment workflows

## Content Updates

Most website copy lives in:

```text
lib/siteContent.ts
```

Team profile photos live in:

```text
public/team/
```

After editing content, commit and push to `main` to trigger automatic deployment.