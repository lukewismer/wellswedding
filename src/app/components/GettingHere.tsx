import Image from 'next/image';
import styles from './GettingHere.module.css';

export default function GettingHere() {
  return (
    <section id="getting-here" className={`section ${styles.gettingHere}`}>
      <div className="container">
        <h2 className={styles.title}>Getting Here</h2>
        
        <div className={styles.contentGrid}>
          {/* Photo Column - Now with two stacked photos */}
          <div className={styles.photoColumn}>
            <div className={styles.photoStack}>
              {/* Top Photo */}
              <div className={styles.photoContainer}>
                <Image 
                  src="/images/couple-transportation-1.png"
                  alt="Jeremy and Kara"
                  width={400}
                  height={300}
                  className={`${styles.couplePhoto} ${styles.firstPhoto}`}
                />
                <div className={styles.photoOverlay}></div>
              </div>
              
              {/* Bottom Photo */}
              <div className={styles.photoContainer}>
                <Image 
                  src="/images/couple-transportation-2.jpg"
                  alt="Jeremy and Kara"
                  width={400}
                  height={300}
                  className={styles.couplePhoto}
                />
                <div className={styles.photoOverlay}></div>
              </div>
            </div>
          </div>

          {/* Content Column - Rest remains the same */}
          <div className={styles.contentColumn}>
            <div className={styles.intro}>
              <p className={styles.address}>
                American Creek Lodge is located at <strong>23200 Trans-Canada Highway, Hope, British Columbia</strong>.
              </p>
            </div>

            <div className={styles.transportationList}>
              {/* By Car */}
              <div className={styles.transportItem}>
                <div className={styles.transportHeader}>
                  <div className={`${styles.transportIcon} ${styles.carIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 11L6.5 6.5H17.5L19 11M5 11V18.5H19V11M5 11H3M19 11H21M7.5 16.5C7.5 16.5 8.25 16.5 9 16.5C9.75 16.5 10.5 15.75 10.5 15C10.5 14.25 9.75 13.5 9 13.5C8.25 13.5 7.5 14.25 7.5 15C7.5 15.75 7.5 16.5 7.5 16.5ZM16.5 16.5C16.5 16.5 17.25 16.5 18 16.5C18.75 16.5 19.5 15.75 19.5 15C19.5 14.25 18.75 13.5 18 13.5C17.25 13.5 16.5 14.25 16.5 15C16.5 15.75 16.5 16.5 16.5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className={styles.transportTitle}>By Car</h3>
                </div>
                <div className={styles.transportContent}>
                  <p>Parking will be available at the venue. We will have family members directing drivers from 3:00-3:30 pm as to where they can park.</p>
                  <div className={styles.importantNote}>
                    <div>
                      <strong>Please do not drive if you plan on drinking</strong> as we ask that cars are not left parked onsite overnight.
                    </div>
                  </div>
                </div>
              </div>

              {/* By Shuttle */}
              <div className={styles.transportItem}>
                <div className={styles.transportHeader}>
                  <div className={`${styles.transportIcon} ${styles.shuttleIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 3H1V16H16V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className={styles.transportTitle}>By Shuttle</h3>
                </div>
                <div className={styles.transportContent}>
                  <p>We have hired a private bus service to shuttle guests to and from the venue on our wedding day.</p>
                  <p>Please note that the bus will only be transporting guests between the <strong>Hope area</strong> and the venue.</p>
                  <div className={styles.warningNote}>
                    <div>
                      <strong>Due to limited time, we cannot accommodate guests who choose to stay in:</strong>
                      <ul className={styles.locationList}>
                        <li>Chilliwack</li>
                        <li>Harrison</li>
                        <li>Agassiz</li>
                        <li>Sunshine Valley</li>
                        <li>Anywhere else outside Hope</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.contactNote}>
                    <p>If you book accommodation in Hope, please contact Kara or Jeremy so they can add your pickup location to the bus schedule.</p>
                  </div>
                </div>
              </div>

              {/* By Taxi */}
              <div className={styles.transportItem}>
                <div className={styles.transportHeader}>
                  <div className={`${styles.transportIcon} ${styles.taxiIcon}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 5H20C21.1046 5 22 5.89543 22 7V11H2V7C2 5.89543 2.89543 5 4 5H6M18 5V3C18 1.89543 17.1046 1 16 1H8C6.89543 1 6 1.89543 6 3V5M18 5V8M6 5V8M2 11V19C2 20.1046 2.89543 21 4 21H5M2 11H22M22 11V19C22 20.1046 21.1046 21 20 21H19M19 21C19 22.1046 18.1046 23 17 23C15.8954 23 15 22.1046 15 21M19 21H15M15 21C15 22.1046 14.1046 23 13 23C11.8954 23 11 22.1046 11 21M5 21C5 22.1046 5.89543 23 7 23C8.10457 23 9 22.1046 9 21M5 21H9M9 21C9 22.1046 9.89543 23 11 23C12.1046 23 13 22.1046 13 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className={styles.transportTitle}>By Taxi</h3>
                </div>
                <div className={styles.transportContent}>
                  <p>If you choose to stay outside the Hope area and require transportation, please use a taxi service.</p>
                  <div className={styles.importantNote}>
                    <div className={styles.noteIcon}></div>
                    <div>
                      <strong>Uber does not operate reliably in the area.</strong>
                    </div>
                  </div>
                  <div className={styles.taxiTip}>
                    <p>We recommend pre-booking your taxi for the return trip to ensure availability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}