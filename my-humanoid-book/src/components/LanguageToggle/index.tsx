 import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const LanguageToggle: React.FC = () => {
  return (
    <div className={styles.languageToggleContainer}>
      {/* Just a static English button, no switching */}
      <button className={clsx(styles.languageToggleButton, styles.active)}>
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
