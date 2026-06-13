# CropIntel

Web app for crop leaf disease hints using EfficientNet → TensorFlow Lite, with a Next.js UI.

## Run without training (no Kaggle)

Trained weights live under `ml/models/` (gitignored). You do **not** need Kaggle or local training if you install models once:

### Option A — Download a release zip (recommended)

1. Get a direct `.zip` URL from a maintainer (e.g. GitHub **Releases**).
2. From the repo root:

```bash
pip install -r ml/requirements-inference.txt
export CROPINTEL_MODELS_URL='https://example.com/cropintel-models.zip'
python3 -m ml.scripts.fetch_models
```

3. Install Node deps and start the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3050](http://localhost:3050). The API runs `scripts/predict.py` with `python3`.

## Contact form email setup (Resend)

The public Contact page posts to the Next.js route handler at `/api/contact`. The backend route sends email through Resend, so the Resend API key is never exposed to frontend code.

### 1. Create a free Resend account

1. Go to [https://resend.com/](https://resend.com/).
2. Create a free account.
3. Open the Resend dashboard.

### 2. Create an API key

1. In Resend, open **API Keys**.
2. Create a new API key.
3. Copy the key. It should only be stored in server-side environment variables.

### 3. Add environment variables

Create `.env.local` from `.env.example` or `.env.local.example`:

```bash
cp .env.example .env.local
```

Set the contact form values:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=cofounder@example.com
```

`CONTACT_EMAIL` is the cofounder inbox that receives contact form submissions.

Restart the dev server after changing environment variables:

```bash
npm run dev
```

For production, add the same variables in the hosting provider's environment variable settings before deploying.

### Test the contact form locally

1. Install dependencies with `npm install`.
2. Add `RESEND_API_KEY` and `CONTACT_EMAIL` to `.env.local`.
3. Run `npm run dev`.
4. Open [http://localhost:3050/contact](http://localhost:3050/contact).
5. Submit the form with a valid full name, email, subject, and message.
6. Confirm the success message appears and `CONTACT_EMAIL` receives the email.

Resend's default testing sender is `onboarding@resend.dev`. For production sending from a CropIntel address, verify a sending domain in Resend and update the `from` address in `app/api/contact/route.ts`.

### Option B — Docker

```bash
export CROPINTEL_MODELS_URL='https://example.com/cropintel-models.zip'   # required for first-time fetch
docker compose up --build
```

Models are stored in `./ml/models` on your machine. Set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in `.env` if you use the outbreak map.

## Train yourself (needs Kaggle data)

See [ml/README.md](ml/README.md): Kaggle API, `download_datasets.py`, and training scripts. Use `pip install -r ml/requirements.txt` (includes `kaggle`).

## Maintainer: publish models for others

After training, package `ml/models/`:

```bash
pip install -r ml/requirements.txt   # or minimal env with ml on PYTHONPATH
python3 -m ml.scripts.package_models -o cropintel-models.zip
```

Upload `cropintel-models.zip` to a release and share the **direct download URL** as `CROPINTEL_MODELS_URL`.

## Project layout

- `app/` — Next.js (UI + `/api/predict`)
- `scripts/predict.py` — inference entrypoint for the API
- `ml/` — training, `tflite_predictor`, config

## License

MIT
