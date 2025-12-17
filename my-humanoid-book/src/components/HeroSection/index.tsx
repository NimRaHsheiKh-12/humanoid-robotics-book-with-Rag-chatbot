import React, { JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface HeroSectionProps {
  firstChapterUrl?: string;
}

export default function HeroSection({ firstChapterUrl }: HeroSectionProps): JSX.Element {
  const defaultChapterUrl = '/docs/foundations/01-introduction-humanoid-robotics';

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Agentic AI & Humanoid Robotics</h1>
        <p className="hero__subtitle">Not Just a Book — A Glimpse into the Future</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={firstChapterUrl || defaultChapterUrl}
          >
            Explore Chapters
          </Link>
        </div>
        <img
          src={useBaseUrl('/img/robo1.svg')}
          alt="Humanoid Robot"
          className={styles.heroImage}
        />
      </div>
    </header>
  );
}
