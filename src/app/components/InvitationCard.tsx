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
            <div className={styles.cardLabel}>
              <span>Front</span>
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
            <div className={styles.cardLabel}>
              <span>Back</span>
            </div>
          </div>
        </div>

        {/* Important Note Section */}
        <div className={styles.importantNote}>
          <div className={styles.noteContent}>
            <h3 className={styles.noteTitle}>Important Note</h3>
            <p className={styles.noteText}>
              Please note that due to limited space, we are only able to accommodate those named on the invitation envelope. 
              Our wedding will be an adults-only event, as the venue is not well suited for children. 
              We truly appreciate your understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}