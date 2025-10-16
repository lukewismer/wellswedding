import Link from 'next/link';
import Image from 'next/image';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {/* Romantic Background */}
        <div className={styles.background}></div>
        
        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.errorCode}>
            <span className={styles.number}>4</span>
            <div className={styles.ringContainer}>
              <Image 
                src="/icons/ring.png" 
                alt="Wedding Ring" 
                width={80}
                height={80}
                className={styles.ring}
              />
            </div>
            <span className={styles.number}>4</span>
          </div>

          <h1 className={styles.title}>Love is Lost</h1>
          <p className={styles.message}>
            We couldn&apos;t find the page you&apos;re looking for, but we found each other. 
            Let&apos;s get you back to celebrating love!
          </p>

          {/* Romantic Quote */}
          <div className={styles.quote}>
            <p className={styles.quoteText}>
            &quot;The best thing to hold onto in life is each other.&quot;
            </p>
            <p className={styles.quoteAuthor}>- Audrey Hepburn</p>
          </div>

          {/* Navigation Options */}
          <div className={styles.actions}>
            <Link href="/" className={`btn ${styles.homeButton}`}>
              Return to Our Love Story
            </Link>
            <div className={styles.secondaryLinks}>
              <Link href="/details" className={styles.secondaryLink}>
                Wedding Details
              </Link>
              <Link href="/rsvp" className={styles.secondaryLink}>
                RSVP
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className={styles.decorations}>
            <div className={styles.heart}>💕</div>
            <div className={styles.flower}>🌸</div>
            <div className={styles.heart}>💖</div>
          </div>
        </div>

        {/* Couple Photo */}
        <div className={styles.coupleImage}>
          <Image 
            src="/images/engagement.png" 
            alt="Jeremy and Kara"
            width={300}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </main>
  );
}