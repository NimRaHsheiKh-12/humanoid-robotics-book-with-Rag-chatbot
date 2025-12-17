import React, { JSX, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Chat window component
const ChatWindow = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newUserMessage = `You: ${input}`;
    setMessages((prev) => [...prev, newUserMessage]);
    const userQuery = input;
    setInput('');

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userQuery }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, `Bot: ${data.reply}`]);
    } catch (error) {
      console.error("Chatbot backend error:", error);
      setMessages((prev) => [...prev, 'Bot: Error communicating with chatbot. Please try again.']);
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h3>Chat with AI Assistant</h3>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.chatMessages}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

import FloatingIcon from './FloatingIcon';

// Main Chatbot widget
export default function ChatbotWidget(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingIcon hidden={isOpen} onClick={() => setIsOpen(true)} />
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
}
