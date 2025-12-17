import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Digital Intelligence',
    Svg: require('@site/static/img/robo2.svg').default,
    description: (
      <>
        Explore the rise of Agentic AI, machines that can think, learn, and make decisions independently, shaping the future of humanity.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    Svg: require('@site/static/img/robo1.svg').default,
    description: (
      <>
        Discover humanoid robots designed to interact with humans, understand emotions, and assist in everyday tasks with precision.
      </>
    ),
  },
  {
    title: 'Future Innovation',
    Svg: require('@site/static/img/robo3.svg').default,
    description: (
      <>
        Dive into the world where AI and robotics converge, pushing the boundaries of technology and redefining what machines can achieve.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
