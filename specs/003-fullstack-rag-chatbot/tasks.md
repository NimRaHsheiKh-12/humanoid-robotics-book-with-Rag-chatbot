# Tasks: Full-Stack RAG Chatbot

**Input**: Design documents from `/specs/003-fullstack-rag-chatbot/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1 for this feature)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Project initialization and basic structure.

- [X] T001 Create backend directory `my-humanoid-book/backend/`
- [X] T002 [P] Create initial `my-humanoid-book/backend/main.py` file.
- [X] T003 [P] Create `my-humanoid-book/backend/requirements.txt` with dependencies: fastapi, uvicorn, python-dotenv, langchain, langchain-google-genai, chromadb.
- [X] T004 [P] Create `my-humanoid-book/backend/.env.example` file with `GOOGLE_API_KEY=""`.
- [X] T005 [P] Create Docusaurus page `my-humanoid-book/src/pages/chatbot.mdx` to host the component.
- [X] T006 [P] Create skeleton React component `my-humanoid-book/src/components/Chatbot/index.tsx`.
- [X] T007 [P] Create stylesheet `my-humanoid-book/src/components/Chatbot/styles.module.css`.

---

## Phase 2: User Story 1 - Backend Implementation (Priority: P1) 🎯 MVP

**Goal**: A user can send a query to the backend and receive a RAG-generated response.
**Independent Test**: Send a POST request to `/chat` with a query and receive a valid JSON response.

### Implementation for User Story 1 (Backend)

- [X] T008 [US1] In `my-humanoid-book/backend/main.py`, set up the basic FastAPI application instance.
- [X] T009 [US1] In `my-humanoid-book/backend/main.py`, add CORS middleware to allow requests from `http://localhost:3000`.
- [X] T010 [US1] In `my-humanoid-book/backend/main.py`, implement logic to load the `GOOGLE_API_KEY` from the `.env` file.
- [X] T011 [US1] In `my-humanoid-book/backend/main.py`, create the data models for the request (`ChatRequest`) and response (`ChatResponse`) using Pydantic.
- [X] T012 [US1] In `my-humanoid-book/backend/main.py`, implement the RAG document loading and splitting logic using `DirectoryLoader` and `RecursiveCharacterTextSplitter`. Assume source documents are in `my-humanoid-book/docs/`.
- [X] T013 [US1] In `my-humanoid-book/backend/main.py`, initialize `GoogleGenerativeAIEmbeddings` and create the in-memory ChromaDB vector store from the split documents.
- [X] T014 [US1] In `my-humanoid-book/backend/main.py`, construct the full RAG chain using LangChain Expression Language (LCEL), combining the retriever, a prompt template, the Gemini LLM, and an output parser.
- [X] T015 [US1] In `my-humanoid-book/backend/main.py`, implement the `/chat` POST endpoint that accepts a `ChatRequest`, passes the query to the RAG chain, and returns a `ChatResponse`.

---

## Phase 3: User Story 1 - Frontend Implementation (Priority: P1) 🎯 MVP

**Goal**: A user can interact with a web UI to chat with the backend service.
**Independent Test**: Open the chatbot page, send a message, and see the response from the backend displayed correctly.

### Implementation for User Story 1 (Frontend)

- [X] T016 [US1] In `my-humanoid-book/src/pages/chatbot.mdx`, import and render the `Chatbot` component.
- [X] T017 [US1] In `my-humanoid-book/src/components/Chatbot/index.tsx`, build the chat UI using `@chatscope/chat-ui-kit-react`, including `MainContainer`, `ChatContainer`, `MessageList`, `Message`, and `MessageInput`.
- [X] T018 [US1] In `my-humanoid-book/src/components/Chatbot/index.tsx`, implement React state management (`useState`) for messages and typing indicators.
- [X] T019 [US1] In `my-humanoid-book/src/components/Chatbot/index.tsx`, implement the `handleSend` function to send the user's message to the backend `/chat` endpoint using `fetch`.
- [X] T020 [US1] In `my-humanoid-book/src/components/Chatbot/index.tsx`, add logic to process the JSON response from the backend and update the message list with the bot's reply.
- [X] T021 [US1] In `my-humanoid-book/src/components/Chatbot/styles.module.css`, add basic styling to ensure the chatbot component fills the page and is usable.

---

## Phase 4: Polish & Validation

**Purpose**: Final validation and documentation updates.

- [X] T022 [P] Manually test the backend using an API client by sending a POST request to `http://localhost:8000/chat`.
- [X] T023 [P] Manually test the frontend by opening `http://localhost:3000/chatbot` and having a conversation.
- [X] T024 Verify the end-to-end flow works as described in the spec.
- [X] T025 Update the main `my-humanoid-book/README.md` with the setup and run instructions from `quickstart.md`.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** can be done in parallel.
- **Phase 2 (Backend)** depends on Phase 1. Tasks within Phase 2 are mostly sequential.
- **Phase 3 (Frontend)** can start after Phase 1, but full end-to-end testing depends on Phase 2 completion.
- **Phase 4 (Validation)** depends on all previous phases being complete.

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1: Setup.
2. Complete Phase 2: Backend Implementation.
3. Validate the backend independently with an API client.
4. Complete Phase 3: Frontend Implementation.
5. Complete Phase 4: Polish & Validation.
6. **STOP and VALIDATE**: The entire feature should be working end-to-end.
