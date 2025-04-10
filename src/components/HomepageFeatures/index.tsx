import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
type FeatureItem = {
  title: string;
  description: JSX.Element;
  button: JSX.Element;
  ImageURL?: string;
};

const FeatureList: FeatureItem[] = [
  // Feature list is now empty
];

function Feature({ title, description, ImageURL, button }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {ImageURL && (
          <img
            className={styles.featureSvg}
            alt={title}
            src={ImageURL}
            role="img"
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {button}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
