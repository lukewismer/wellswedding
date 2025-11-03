import styles from './Gifts.module.css';

export default function Gifts() {
  return (
    <section id="gifts" className={`section ${styles.gifts}`}>
      <div className={styles.backgroundOverlay}></div>
      <div className="container">
        <h2 className={styles.title}>Gift Registry</h2>
        <div className={styles.content}>
          <div className={styles.message}>
            <p className={styles.mainMessage}>
              More details to come later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}