import React from 'react';
import styles from './styles.module.css';

interface ChatbotPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const ChatbotPopup: React.FC<ChatbotPopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.chatbotPopupOverlay}>
      <div className={styles.chatbotPopup}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {/* Chatbot content will go here */}
        <p>Chatbot content placeholder</p>
      </div>
    </div>
  );
};

export default ChatbotPopup;
