import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.nav}>
            <Link 
              href="https://collab.land/privacy-policy" 
              className={styles.link}
            >
              Privacy Policy
            </Link>
            <Link 
              href="https://collab.land/terms-of-service" 
              className={styles.link}
            >
              Terms of Service
            </Link>
          </nav>
          
          <div className={styles.social}>
            <Link href="https://linktr.ee/collab_land_" target="_blank" rel="noopener noreferrer">
              <img 
                src="/img/LinktreeIcon.svg" 
                alt="Linktree" 
                width={20} 
                height={20} 
                className={styles.icon}
              />
            </Link>
            <Link href="https://discord.gg/collabland" target="_blank" rel="noopener noreferrer">
              <img 
                src="/img/DiscordIcon.svg" 
                alt="Discord" 
                width={20} 
                height={20}
                className={styles.icon}
              />
            </Link>
            <Link href="https://x.com/collab_land_" target="_blank" rel="noopener noreferrer">
              <img 
                src="/img/XIcon.svg" 
                alt="X (formerly Twitter)" 
                width={20} 
                height={20}
                className={styles.icon}
              />
            </Link>
          </div>

          <p className={styles.copyright}>
            <img 
              src="/img/LogoIconBlue.svg" 
              alt="Collab.Land Logo" 
              width={18} 
              height={18} 
              className={styles.logo}
            />
            Collab.Land® 2025
          </p>
        </div>
      </div>
    </footer>
  );
} 