// src/app/components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Jeremy & Kara</h3>
          <p className={styles.footerText}>July 25, 2026</p>
          <p className={styles.footerText}>American Creek Lodge</p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Contact</h4>
          <div className={styles.contactInfo}>
            <p className={styles.footerText}>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className={styles.footerText}>
              <strong>Email:</strong> jeremyandkara@example.com
            </p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Quick Links</h4>
          <div className={styles.footerLinks}>
            <Link href="/" className={styles.footerLink}>Home</Link>
            <Link href="/details" className={styles.footerLink}>Details</Link>
            <Link href="/rsvp" className={styles.footerLink}>RSVP</Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Golden Bear Labs. Made with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
