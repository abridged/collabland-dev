import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  imageURL?: string;
 
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to connect and collaborate',
    Svg: require('@site/static/img/Waving-WhiteBG.svg').default,
    imageURL: 'https://res.cloudinary.com/kennyy/image/upload/f_auto,q_auto/v1672928107/Globe-Molecule_adopdj.png',
    description: (
      <>
        Collab.Land integrates popular web2 platforms with web3 infrastures to facilitate connections and collaborations across the internet.
      </>
    ),
  },
  {
    title: 'Create a community of communities',
    Svg: require('@site/static/img/Flying-WhiteBG.svg').default,
    imageURL: 'https://res.cloudinary.com/kennyy/image/upload/f_auto,q_auto/v1672940342/Rocket_2_1_ulddqh.png',
    description: (
      <>
        Using decentralized identities, crypto assets, and verifiable credentials, Collab.Land is creating a community of communities.
      </>
    ),
  },
  {
    title: 'Build a decentralized platform',
    Svg: require('@site/static/img/Dancing-WhiteBG.svg').default,
    imageURL: 'https://res.cloudinary.com/kennyy/image/upload/f_auto,q_auto/v1672930080/lego-1_kyfdlf.png',
    description: (
      <>
        By promoting progressive decentralization, Collab.Land allows communities and members to decide what data they own and what they share.
      </>
    ),
  },
  {
    title: 'Developer Portal',
    Svg: require('@site/static/img/Dancing-WhiteBG.svg').default,
    imageURL: 'https://res.cloudinary.com/kennyy/image/upload/f_auto,q_auto/v1672930088/tools_elzowd.png',
    description: (
      <>
        Access your developer dashboard and request more resources such as API keys, cloud wallets, and Collab tokens.
      </>
    ),
  },
];

function Feature({title,  description, imageURL}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageURL} className={styles.featureSvg} alt="Collab.Land" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
