import styles from './Gifts.module.css';

export default function Gifts() {
  return (
    <section id="gifts" className={`section ${styles.gifts}`}>
      <div className={styles.backgroundOverlay}></div>
      <div className="container">
        <h2 className={styles.title}>Gift Registry</h2>
        <div className={styles.content}>
          <div className={styles.message}>
            <a 
              href="https://www.myregistry.com/giftlist/wellswedding26" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.registryLink}
            >
              View Our Gift Registry
            </a>
            <p className={styles.password}>
              Password: Wells2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}