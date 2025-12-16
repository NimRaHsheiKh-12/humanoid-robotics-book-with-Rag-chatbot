---
id: 12
title: Create RAG Chatbot Backend
stage: spec
date: 2025-12-09
surface: agent
model: gemini-pro
feature: rag-chatbot-backend
branch: 002-rag-chatbot-backend
user: pak
command: (manual creation)
labels: [fastapi, rag, chromadb, gemini]
links:
  spec: specs/002-rag-chatbot-backend/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - rag_chatbot_backend/data/books.md
  - rag_chatbot_backend/db/
  - rag_chatbot_backend/.env
  - rag_chatbot_backend/main.py
  - rag_chatbot_backend/requirements.txt
  - rag_chatbot_backend/README.md
  - specs/002-rag-chatbot-backend/spec.md
  - specs/002-rag-chatbot-backend/checklists/requirements.md
tests:
  - none
---

## Prompt

You are an expert Python developer.Generate a **complete FastAPI backend** for a RAG (Retrieval-Augmented Generation) chatbot.Requirements:1. Endpoint: `/chat` that accepts a user query.2. Retrieve relevant information from **local markdown files** about books or book topics.3. Store embeddings in **ChromaDB** for fast retrieval.4. Use **Google Gemini API** as the LLM to generate answers.5. The backend should return JSON: `{ "reply": "<answer>" }`6. Provide **copy-paste ready code** including all imports.7. Include **step-by-step instructions** to run locally.Do not generate frontend code in this prompt. Focus only on **working backend**.

## Response snapshot

I have created a complete FastAPI backend for a RAG chatbot. The project includes a `main.py` with the FastAPI application, a `requirements.txt` file, a `data` directory with a sample `books.md` file, a `.env` file for the API key, and a `README.md` with detailed setup and execution instructions.

## Outcome

- ✅ Impact: Created a full backend application structure with code and documentation.
- 🧪 Tests: No tests were created.
- 📁 Files: Created a FastAPI main application, requirements file, README, .env file, and a data directory with a sample markdown file.
- 🔁 Next prompts: The user can now run the application.
- 🧠 Reflection: The process was smooth, but the initial script for PHR creation failed due to a parameter parsing issue.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-new-feature.ps1` script failed to parse the long JSON string correctly.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
