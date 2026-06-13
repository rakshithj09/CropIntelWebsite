Local dev setup (quick)

1) Use the repository venv (created already at `.venv`) or create one:

```bash
# create venv if missing
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip setuptools wheel
pip install -r ml/requirements-inference.txt  # inference deps (tensorflow if supported)
pip install -r ml/requirements.txt  # optional: full training stack (kaggle, sklearn, matplotlib)
```

2) Open VS Code and select the interpreter:

  - Cmd/Ctrl+Shift+P → "Python: Select Interpreter" → choose `.venv/bin/python`
  - Reload the window (Cmd/Ctrl+Shift+P → Developer: Reload Window)

3) Editor conveniences added for this workspace:
  - `.vscode/settings.json` sets default interpreter to `.venv/bin/python` and suppresses Tailwind unknown at-rule warnings
  - `.eslintrc.local.json` disables `@next/next/no-img-element` warnings locally

Notes:
  - If you plan to run training locally, use Python 3.11 venv (recommended) or the Docker ML image (`docker-compose.ml.yml`).
  - If you want the ESLint rule re-enabled later, remove or edit `.eslintrc.local.json`.
