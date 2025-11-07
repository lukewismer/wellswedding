import styles from './IntroDate.module.css';

export default function IntroDate() {
  return (
    <section className={styles.introDate}>
      <div className={`container ${styles.introContainer}`}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.outerBorder}>
              <div className={styles.innerBorder}>
                <img 
                  src="/images/hope.jpg" 
                  alt="Kara and Jeremy" 
                  className={styles.introImage}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.textColumn}>
          <div className={styles.dateText}>July 25</div>
          <div className={styles.atText}>at</div>
          <div className={styles.venueText}>AMERICAN CREEK LODGE</div>
        </div>
      </div>
    </section>
  );
}