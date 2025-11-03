import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.heroTitle}>
          Jeremy & Kara
        </h1>
        <p className={styles.heroSubtitle}>
          July 25, 2026
        </p>
        <p className={styles.heroText}>
          Join us as we begin our forever together
        </p>
        
        {/* Chevron animation */}
        <div className={styles.chevronContainer}>
          <a href="#" className={styles.chevronLink}>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <span className={styles.chevronText}>Scroll for details & RSVP</span>
          </a>
        </div>
      </div>
    </section>
  );
}