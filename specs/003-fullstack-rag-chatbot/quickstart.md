# Quickstart: Full-Stack RAG Chatbot

This guide provides instructions for setting up and running the Full-Stack RAG Chatbot application.

## Prerequisites

-   Python 3.9+
-   Node.js and npm
-   A Google Gemini API key

## Setup

1.  **Clone the repository.**
2.  **Install backend dependencies:**
    ```bash
    cd backend
    pip install -r requirements.txt
    ```
3.  **Install frontend dependencies:**
    ```bash
    cd ../my-humanoid-book
    npm install
    ```
4.  **Set up environment variables:**
    -   Create a `.env` file in the `backend` directory.
    -   Add your Google Gemini API key to the `.env` file:
        ```
        GOOGLE_API_KEY="your-api-key"
        ```

## Running the Application

1.  **Start the backend server:**
    ```bash
    cd backend
    uvicorn main:app --reload
    ```
2.  **Start the frontend development server:**
    ```bash
    cd ../my-humanoid-book
    npm run start
    ```
3.  **Access the application:**
    -   Open your browser and navigate to `http://localhost:3000/chatbot`.

## Verification

-   You should see the chat interface.
-   You should be able to send a message and receive a response from the chatbot.