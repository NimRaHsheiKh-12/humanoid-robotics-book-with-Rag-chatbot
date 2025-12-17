# My Humanoid Book — Development README

This repository contains a Docusaurus frontend and a FastAPI backend that powers a small RAG chatbot demo.

## Quick start (development)

1. Install backend dependencies

```powershell
pip install -r .\backend\requirements.txt
```

2. Install frontend dependencies

```bash
npm install
```

3. Start both frontend and backend in development mode (recommended)

```bash
npm run start-dev
# or to stream raw logs in a single terminal
npm run start-logs
```

Notes

- The frontend dev script automatically picks a free port between 3000–3005 and logs it. The site path is `/humanoid-robotics-book-with-chatbot/` by default.
- Backend runs on `http://127.0.0.1:8000` by default.

Environment variables

- `GPT4ALL_MODEL_PATH` — (optional) path to a local GPT4All model file. If set and exists, the backend will try to load it and will not try to download.
- `GPT4ALL_MODEL_NAME` — (optional) model name (default: `ggml-gpt4all-j-v1.3-groovy`).
- `GPT4ALL_ALLOW_DOWNLOAD` — (optional) set to `1` or `true` to allow the backend to auto-download models.

Useful endpoints

- Backend root: `http://127.0.0.1:8000/`
- LLM status: `http://127.0.0.1:8000/llm-status`
- Chat endpoint: `POST http://127.0.0.1:8000/chat` with JSON `{ "query": "..." }`

Troubleshooting

- If the frontend fails because a port is in use, the frontend script will pick another port automatically.
- If `/llm-status` shows `initialized: false`, either set `GPT4ALL_MODEL_PATH` to a valid model or set `GPT4ALL_ALLOW_DOWNLOAD=1` to allow download (be mindful of disk and network).

Contributing

Feel free to open PRs to improve the UI, add tests, or change the LLM provider.
