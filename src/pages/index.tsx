import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import pointerIcon from '@site/static/img/point.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.content}>
            <h1 className={styles.hero__title}>{siteConfig.title}</h1>
            <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
            <div className={styles.button}>
            <Link
              className={styles.button__content}
              to="/docs/intro">
                Get Started 
                <img width={40} height={40} src={require('@site/static/img/point.png').default} />
            </Link>
            </div>
          </div>
          <div>
          <img width={500} height={600} src='https://res.cloudinary.com/kennyy/image/upload/f_auto,q_auto/v1672928104/Holding-HandOut_qh7wjb.png' />
        </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Collab.Land Docs">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
