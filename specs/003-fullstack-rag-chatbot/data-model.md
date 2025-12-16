# Data Model: Full-Stack RAG Chatbot

This document describes the data model for the Full-Stack RAG Chatbot.

## Entities

### Message

Represents a single message in the chat conversation.

-   **id**: `string` (unique identifier for the message)
-   **text**: `string` (the content of the message)
-   **sender**: `string` ("user" or "bot")
-   **timestamp**: `datetime` (the time the message was sent)

## Relationships

A `Conversation` is a collection of `Message` entities, ordered by `timestamp`. The application will manage the state of the conversation in the frontend.