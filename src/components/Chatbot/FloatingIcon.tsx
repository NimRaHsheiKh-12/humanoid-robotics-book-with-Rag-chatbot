import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

const FloatingIcon = ({ onClick, hidden }) => {
  return (
    <div
      className={clsx(styles.chatbotIcon, { [styles.hidden]: hidden })}
      onClick={onClick}
    >
      <img src={useBaseUrl('/img/robo1.svg')} alt="Chatbot Icon" />
    </div>
  );
};

export default FloatingIcon;
