import Image from 'next/image';
import styles from './InvitationCard.module.css';

export default function InvitationCard() {
  return (
    <section id="invitation" className={`section ${styles.invitation}`}>
      <div className="container">
        <h2 className={styles.invitationTitle}>
          You&apos;re Invited
        </h2>
        
        <div className={styles.invitationContainer}>
          {/* Front of the card */}
          <div className={styles.cardSide}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage}>
                <Image 
                  src="/images/invite-card-front.png"
                  alt="Wedding Invitation Front"
                  width={500}
                  height={700}
                  className={styles.image}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Back of the card */}
          <div className={styles.cardSide}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage}>
                <Image 
                  src="/images/invite-card-back.png"
                  alt="Wedding Invitation Back"
                  width={500}
                  height={700}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}