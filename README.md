# CropIntel Website

This repository contains the CropIntel public website built with Next.js + TypeScript and Tailwind CSS. It includes the static marketing site, a small UI to launch the scanner, and CI configuration to deploy to Firebase Hosting.

IMPORTANT: This repo is proprietary. Do not share or publish code, assets, or secrets without explicit permission from CropIntel.

## Quick start (local)

Prerequisites

- Node.js 18.x (LTS)
- npm 9+ (or the npm version compatible with your Node install)
- Firebase CLI (optional if you will deploy locally)
- Git

Get the code

```bash
git clone git@github.com:rakshithj09/CropIntelWebsite.git
cd "CropIntelWebsite"
```

Install dependencies and run development server

```bash
npm ci
npm run dev
```

Open http://localhost:3050 (this project defaults to port 3050 per package.json)

If the server fails to start with EADDRINUSE, check and free the port:

```bash
lsof -iTCP:3050 -sTCP:LISTEN -n -P
# kill <PID>
```

## Scripts

Available npm scripts (see `package.json`):

- `npm run dev` — Start Next.js dev server (port 3050)
- `npm run dev:clean` — Remove `.next` and start dev server
- `npm run build` — Build Next.js production artifacts
- `npm run build:hosting` — Build with `NEXT_OUTPUT_EXPORT=true` to create a static `out` folder used by Firebase Hosting static deploys
- `npm run start` — Run the production server after `build`
- `npm run lint` — Run ESLint

Use `npm run build:hosting` when deploying to Firebase Hosting static site.

## Environment and secrets

- The app loads environment variables from `.env.local` when present. Do not commit secret keys.
- CI deploy uses a service account JSON stored in the repository secrets (example name used in workflows: `FIREBASE_SERVICE_ACCOUNT_CROPINTEL_AE842`).
- To create a service account key and add it as a GitHub secret:

```bash
# create service account and key with gcloud (requires permissions)
gcloud iam service-accounts create github-actions-deployer --display-name="GH Actions deployer"
gcloud projects add-iam-policy-binding <PROJECT_ID> \
	--member="serviceAccount:github-actions-deployer@<PROJECT_ID>.iam.gserviceaccount.com" \
	--role="roles/firebasehosting.admin"
gcloud iam service-accounts keys create key.json \
	--iam-account=github-actions-deployer@<PROJECT_ID>.iam.gserviceaccount.com

# then add as a repo secret (using GitHub CLI)
gh secret set FIREBASE_SERVICE_ACCOUNT_<UPPER_PROJECT_ID> -b key.json
```

Replace `<PROJECT_ID>` with the Firebase project id and `<UPPER_PROJECT_ID>` with the same id uppercased (or the secret name you use in workflows).

## Firebase Hosting — configure & deploy

This project expects a Firebase hosting configuration in `firebase.json` and optional targets in `.firebaserc`.

Common tasks:

- List projects you can access:
```bash
firebase projects:list
```
- Check hosting sites in a project:
```bash
firebase hosting:sites:list --project <PROJECT_ID>
```
- Create a hosting site (site ids are global and must be available):
```bash
firebase hosting:sites:create <SITE_ID> --project <PROJECT_ID>
```
- Map a local hosting target to a site (updates `.firebaserc`):
```bash
firebase target:apply hosting <TARGET_NAME> <SITE_ID> --project <PROJECT_ID>
```
- Build and deploy to hosting (static export flow used by CI):
```bash
npm ci
npm run build:hosting
firebase deploy --only hosting --project <PROJECT_ID>
```

Note: CI workflows in `.github/workflows` were configured to run `npm run build:hosting` and deploy using `FirebaseExtended/action-hosting-deploy`. Ensure the `projectId` and the service account secret used in the workflow match your target project.

## CI (GitHub Actions)

- There are two primary workflows:
	- `firebase-hosting-pull-request.yml` — builds a PR and previews/deploys the `out` folder to a preview hosting site (configured by workflow inputs)
	- `firebase-hosting-merge.yml` — runs on merges and deploys to production

Key points:

- Ensure the workflow's `projectId` and `firebaseServiceAccount` secret name match the project/secret in your repository settings.
- The workflows pin Node.js to an LTS (actions/setup-node@v3 with node-version: '18') to avoid runner-side Node deprecations.

## Code structure and conventions

- `src/app` — Next.js App Router entry points and pages (`layout.tsx`, `page.tsx`, etc.)
- `src/components` — Reusable React components (Nav, ContactForm, etc.)
- `src/lib` — Small helpers and site content
- `public/` — Static assets and brand images
- `styles` — Global CSS is in `src/app/globals.css` and integrates Tailwind. Design tokens (CSS variables) live near the top of that file.

Design token note:

- The file `src/app/globals.css` contains a custom `@theme { ... }` block used as a convenience for authoring variables. If you prefer standard CSS variables that work without a build transform, move those variables into `:root { ... }`. The repo includes a VS Code workspace setting to ignore unknown at-rules in the CSS linter.

## Styling and Tailwind

- Tailwind is wired through `globals.css` (see `@import "tailwindcss"`). The project uses Tailwind's default spacing scale and some custom utilities in CSS.
- If you add or change Tailwind config, run the dev server to regenerate classes used by Tailwind JIT.

## Linting & formatting

- ESLint is configured (see `package.json` scripts). Run:
```bash
npm run lint
```
- Prettier (if used) should be run via your editor or a project script if provided.

## Security / dependencies

- Run `npm audit` regularly. The project may report vulnerabilities; apply `npm audit fix` for non-breaking fixes. Use `npm audit fix --force` only when you can validate the resulting build.

## Testing & QA

- There are no unit tests included in this repo by default. If you add tests, prefer Jest + React Testing Library for components.

## Troubleshooting

- Port in use error when starting dev server: check and kill any process on port 3050 (`lsof -iTCP:3050 -sTCP:LISTEN -n -P`) then restart.
- CI errors about site not found: verify `firebase.json` `hosting.site` and `.firebaserc` `targets` map to a valid hosting site in the project. Use `firebase hosting:sites:list --project <PROJECT_ID>` to confirm.
- Editor reports unknown at-rules: `.vscode/settings.json` in this repo contains a setting to ignore unknown at-rules; you can instead move variables to `:root` for standard compliance.

## Deploy checklist (when you want to publish)

1. Ensure `out/` is produced: `npm run build:hosting`.
2. Confirm `firebase.json` has the correct `hosting.site` or `.firebaserc` maps the target to the right site.
3. Ensure CI service account secret is present and has hosting permissions.
4. Deploy locally to test (optional): `firebase deploy --only hosting --project <PROJECT_ID>`.
5. Open https://<SITE_ID>.web.app to confirm the live site.

## Contributing

- Follow this repo's branch/PR rules. Create a feature branch, run the dev server and validate changes before opening a PR.
- Include screenshots and a short QA checklist in PR descriptions for UI changes.

## Contact / Owners

- For access or production ownership questions, contact the CropIntel engineering lead or the repository owner.

## Legal / license

- This is a private repository. Do not redistribute or reuse code without explicit written permission.

---

If you'd like, I can also:
- Convert the `@theme` block to `:root` in `src/app/globals.css` so variables are valid CSS,
- Add example GitHub Actions secret documentation with the exact secret name expected by the workflow,
- Create a short CONTRIBUTING.md with branch/PR rules.

Tell me which and I’ll make the edits and commit them.