'use client';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-07-25T16:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundOverlay}></div>
      
      {/* Countdown Section */}
      <div className={styles.countdownSection}>
        <div className="container">
          <h3 className={styles.countdownTitle}>Counting Down to Our Special Day</h3>
          <div className={styles.countdownContainer}>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.days}</span>
              <span className={styles.countdownLabel}>Days</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.hours}</span>
              <span className={styles.countdownLabel}>Hours</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.minutes}</span>
              <span className={styles.countdownLabel}>Minutes</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.seconds}</span>
              <span className={styles.countdownLabel}>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>
              <span className={styles.name}>Kara</span>
              <span className={styles.andSymbol}> and </span>
              <span className={styles.name}>Jeremy</span>
            </h3>
            <p className={styles.footerText}>July 25, 2026</p>
            <p className={styles.footerText}>American Creek Lodge</p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <p className={styles.footerText}>
                <strong>Email:</strong> jwells14@shaw.ca
              </p>
              <p className={styles.photoCredit}>
                Engagement photos taken by @alexapedrozaphoto
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Golden Bear Labs
          </p>
        </div>
      </div>
    </footer>
  );
}