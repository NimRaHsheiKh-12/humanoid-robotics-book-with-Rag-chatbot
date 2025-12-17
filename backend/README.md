# RAG Chatbot Backend using FastAPI and Gemini

This project is a complete FastAPI backend for a Retrieval-Augmented Generation (RAG) chatbot. It uses local markdown files as a knowledge base, ChromaDB for embedding storage, and Google's Gemini API for generating answers.

## Project Structure

```
rag_chatbot_backend/
├── data/
│   └── books.md         # Your knowledge base files
├── db/                  # ChromaDB persistent storage
├── .env                 # Environment variables
├── main.py              # The main FastAPI application
├── requirements.txt     # Python dependencies
└── README.md            # This file
```

## Setup and Installation

Follow these steps to get the backend running locally.

### 1. Prerequisites

- Python 3.9 or higher
- An active Google Cloud project with the "Generative Language API" enabled.
- A Google API Key.

### 2. Clone the Repository

Since you've already created the files, you can skip this step if you are the one who created them. Otherwise, clone the repository that contains these files.

### 3. Create a Virtual Environment

It's highly recommended to use a virtual environment to manage dependencies.

```bash
# Navigate to the project directory
cd rag_chatbot_backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\\Scripts\\activate
# On macOS/Linux:
source venv/bin/activate
```

### 4. Install Dependencies

Install all the required Python packages using the `requirements.txt` file.

```bash
pip install -r requirements.txt
```

### 5. Set Up Your Environment Variables

The application loads your Google API key from a `.env` file.

1.  You should have already a `.env` file in the `rag_chatbot_backend` directory.
2.  Open the `.env` file and replace "YOUR_GOOGLE_API_KEY" with your actual Google API Key.

    ```
    GOOGLE_API_KEY="YOUR_GOOGLE_API_KEY"
    ```

### 6. Add Your Knowledge Base

Place your markdown (`.md`) files inside the `data/` directory. The application will automatically read all `.md` files in this folder on startup. A sample `books.md` is already included.

## How to Run the Application

Once the setup is complete, you can start the FastAPI server using `uvicorn`.

```bash
# Make sure you are in the rag_chatbot_backend directory and your virtual environment is active
uvicorn main:app --reload
```

The `--reload` flag makes the server automatically restart after code changes.

The server will be running at `http://127.0.0.1:8000`.

## API Usage

You can interact with the chatbot by sending `POST` requests to the `/chat` endpoint.

### Example using `curl`

```bash
curl -X POST "http://127.0.0.1:8000/chat" \
-H "Content-Type: application/json" \
-d 
'{'
  "query": "What is the book Brave New World about?"
}'
```

### Expected Response

The server will return a JSON object with the chatbot's reply.

```json
{
  "reply": "Brave New World is a dystopian novel by Aldous Huxley set in a futuristic World State. The society is composed of genetically modified citizens organized into an intelligence-based social hierarchy."
}
```

### Interactive API Docs

FastAPI automatically generates interactive API documentation. You can access it by navigating to `http://127.0.0.1:8000/docs` in your browser. This interface allows you to test the `/chat` endpoint directly from your browser.

```