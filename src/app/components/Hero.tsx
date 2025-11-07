import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.namesContainer}>
          <span className={styles.name}>KARA</span>
          <span className={styles.andSymbol}><i>and</i></span>
          <span className={styles.name}>JEREMY</span>
        </div>
        <p className={styles.gettingMarried}>
          ARE GETTING MARRIED
        </p>
      </div>
    </section>
  );
}