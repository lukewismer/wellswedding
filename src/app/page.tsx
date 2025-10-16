import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
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
          <div className={styles.btnContainer}>
            <a href="#invitation" className="btn">
              View Invitation
            </a>
            <a href="/rsvp" className="btn btn-secondary">
              RSVP Now
            </a>
          </div>
        </div>
      </section>

      {/* Invitation Card Section */}
      <section id="invitation" className={`section ${styles.invitation}`}>
        <div className="container">
          <h2 className={styles.invitationTitle}>
            You&apos;re Invited
          </h2>
          <div className={styles.invitationImage}>
            <Image 
              src="/images/invite-card.png"
              alt="Wedding Invitation"
              width={500}
              height={700}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* The Day Section */}
      <section className={`section ${styles.theDay}`}>
        <div className="container">
          <h2 className={styles.theDayTitle}>
            The Day
          </h2>
          <div className={styles.eventGrid}>
            {/* Reception */}
            <div className={styles.eventCard}>
              <div className={styles.eventIcon}>
                <Image 
                  src="/icons/hall.png"
                  alt="Reception"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className={styles.eventTitle}>
                Reception
              </h3>
              <p className={styles.eventTime}>
                4:00 PM
              </p>
              <p className={styles.eventLocation}>
                American Creek Lodge
              </p>
            </div>

            {/* Dinner */}
            <div className={styles.eventCard}>
              <div className={styles.eventIcon}>
                <Image 
                  src="/icons/food.png"
                  alt="Dinner"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className={styles.eventTitle}>
                Dinner
              </h3>
              <p className={styles.eventTime}>
                6:00 PM
              </p>
              <p className={styles.eventLocation}>
                American Creek Lodge
              </p>
            </div>

            {/* Dance */}
            <div className={styles.eventCard}>
              <div className={styles.eventIcon}>
                <Image 
                  src="/icons/dance.png"
                  alt="Dance"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className={styles.eventTitle}>
                Dance
              </h3>
              <p className={styles.eventTime}>
                8:00 PM
              </p>
              <p className={styles.eventLocation}>
                American Creek Lodge
              </p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className={styles.additionalInfo}>
            <p className={styles.additionalInfoText}>
              All events will be held at the beautiful American Creek Lodge
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}