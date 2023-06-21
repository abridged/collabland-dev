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
  // add a button to all of these items
  {
    title: 'Easy to connect and collaborate',
    ImageURL:
      'https://res.cloudinary.com/collabland/image/upload/f_auto,q_auto/v1673350408/globe.webp',
    description: (
      <>
        Collab.Land integrates popular web2 platforms with web3 infrastures to
        facilitate connections and collaborations across the internet.
      </>
    ),
    // button: 'Get Started',
    button: (
      <div className={styles.button}>
        <Link className={styles.buttonContent} to="/help-docs/intro">
          Members
        </Link>
      </div>
    ),
  },
  {
    title: 'Create a community of communities',
    ImageURL:
      'https://res.cloudinary.com/collabland/image/upload/f_auto,q_auto/v1673350407/rocket.webp',
    description: (
      <>
        Using decentralized identities, crypto assets, and verifiable
        credentials, Collab.Land is creating a community of communities.
      </>
    ),
    button: (
      <div className={styles.button}>
        <Link className={styles.buttonContent} to="/help-docs/intro">
          Admins
        </Link>
      </div>
    ),
  },
  {
    title: 'Build a decentralized platform',
    ImageURL:
      'https://res.cloudinary.com/collabland/image/upload/f_auto,q_auto/v1673350407/lego.webp',
    description: (
      <>
        By promoting progressive decentralization, Collab.Land allows
        communities and members to decide what data they own and what they
        share.
      </>
    ),
    button: (
      <div className={styles.button}>
        <Link className={styles.buttonContent} to="/dao/intro">
          DAOs
        </Link>
      </div>
    ),
  },
  {
    title: 'Developer Portal',
    ImageURL:
      'https://res.cloudinary.com/collabland/image/upload/f_auto,q_auto/v1673350407/tools.webp',
    description: (
      <>
        Access your developer dashboard and request more resources such as API
        keys, cloud wallets, and Collab tokens.
      </>
    ),
    button: (
      <div className={styles.button}>
        <Link
          className={styles.buttonContent}
          to="/docs/downstream-integrations/"
        >
          Developers
        </Link>
      </div>
    ),
  },
];

function Feature({ title, description, ImageURL, button }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={ImageURL} className={styles.featuredImg} role="Collab.Land" />
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
