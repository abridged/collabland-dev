import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function ApisRedirect(): JSX.Element {
  useEffect(() => {
    // Redirect to homepage
    window.location.replace('/');
  }, []);

  return (
    <Layout title="Page Not Found">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p>This page has been removed.</p>
        <p>Redirecting...</p>
      </div>
    </Layout>
  );
}

