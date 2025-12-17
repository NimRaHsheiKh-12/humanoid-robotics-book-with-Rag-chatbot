from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import json

# -------------------- CONFIG --------------------
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BACKEND_DIR)
docs_directory = os.path.join(PROJECT_ROOT, "docs")

# -------------------- DATA MODELS --------------------
class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    reply: str

# -------------------- DOCUMENT LOADING (SIMPLIFIED) --------------------
def load_documents():
    """Load markdown documents from docs directory"""
    documents = []
    
    if not os.path.exists(docs_directory):
        print(f"Warning: docs directory not found at {docs_directory}")
        return documents
    
    for root, _, files in os.walk(docs_directory):
        for fname in files:
            if fname.lower().endswith(".md"):
                filepath = os.path.join(root, fname)
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                    documents.append({
                        "content": content,
                        "source": filepath
                    })
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
    
    print(f"Loaded {len(documents)} markdown documents from {docs_directory}")
    return documents

# Load documents once at startup
documents = load_documents()

# -------------------- SIMPLE RETRIEVAL --------------------
def retrieve_documents(query: str, top_k: int = 3):
    """Simple retrieval: match query against documents"""
    if not documents:
        return []
    
    query_words = set(query.lower().split())
    scored = []
    
    for doc in documents:
        content_words = set(doc["content"].lower().split())
        # Simple scoring: how many words match
        score = len(query_words & content_words)
        if score > 0:
            scored.append((score, doc))
    
    # Sort by score descending and return top_k
    scored.sort(key=lambda x: x[0], reverse=True)
    return [doc for _, doc in scored[:top_k]]

# -------------------- SIMPLE RESPONSE GENERATION --------------------
def generate_response(query: str, context: str = "") -> str:
    """Generate a simple response based on query and context"""
    retrieved_docs = retrieve_documents(query)
    
    if not retrieved_docs:
        return (
            f"I couldn't find specific information about '{query}' in my knowledge base. "
            "Please check the documentation or ask a different question."
        )
    
    # Create a simple response combining context
    sources = [doc["source"] for doc in retrieved_docs]
    response = (
        f"Based on my knowledge base, I found information related to '{query}' "
        f"in {len(retrieved_docs)} document(s):\n\n"
        f"Sources: {', '.join([os.path.basename(s) for s in sources])}\n\n"
        f"You can review these documents for more detailed information."
    )
    
    return response

# -------------------- FASTAPI SETUP --------------------
app = FastAPI(
    title="Humanoid Robotics RAG Backend",
    description="Simple RAG backend for humanoid robotics documentation",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------- ROUTES --------------------
@app.get("/")
async def read_root():
    """Welcome endpoint"""
    return {
        "message": "Welcome to the Humanoid Robotics RAG Backend!",
        "docs_loaded": len(documents),
        "api_version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "documents_loaded": len(documents),
        "docs_directory": docs_directory
    }

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Chat endpoint - generate response based on documents"""
    reply = generate_response(request.query)
    return ChatResponse(reply=reply)

@app.get("/documents")
async def list_documents():
    """List all loaded documents"""
    return {
        "count": len(documents),
        "documents": [
            {
                "source": doc["source"],
                "size": len(doc["content"])
            }
            for doc in documents
        ]
    }

# -------------------- SERVER STARTUP --------------------
if __name__ == "__main__":
    import uvicorn
    
    print("=" * 60)
    print("Starting Humanoid Robotics RAG Backend")
    print("=" * 60)
    print(f"Docs directory: {docs_directory}")
    print(f"Documents loaded: {len(documents)}")
    print(f"Server will start at: http://127.0.0.1:8000")
    print(f"API docs available at: http://127.0.0.1:8000/docs")
    print("=" * 60)
    
    uvicorn.run(app, host="127.0.0.1", port=8000)
