import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = {
  onAccept: () => void;
};

export default function TosUpdateModal({ onAccept }: Props) {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="tos-privacy-title">
      <div className={styles.dialog}>
        <h2 id="tos-privacy-title" className={styles.title}>
          Updates to our Terms of Service and Privacy Policy
        </h2>
        <p className={styles.body}>
          We&apos;ve updated our{' '}
          <Link href="https://collab.land/terms-of-service" className={styles.highlightLink}>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="https://collab.land/privacy-policy" className={styles.highlightLink}>
            Privacy Policy
          </Link>
          . Now&apos;s a great chance to review them.
        </p>
        <div className={styles.buttonRow}>
          <button type="button" className={styles.button} onClick={onAccept}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}


