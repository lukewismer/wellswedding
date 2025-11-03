import Image from 'next/image';
import styles from './WhereToStay.module.css';

export default function WhereToStay() {
  const bannerImages = [
    '/images/hope-1.png',
    '/images/hope-2.png',
    '/images/hope-3.png',
    '/images/hope-4.jpg',
    '/images/hope-5.png',
    '/images/hope-6.jpg',
    '/images/hope-7.jpg',
    '/images/hope-8.jpg',
    '/images/hope-9.jpg'
  ];

  // Duplicate the images to create seamless loop
  const duplicatedBannerImages = [...bannerImages, ...bannerImages];

  return (
    <section id="where-to-stay" className={`section ${styles.whereToStay}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Where to Stay</h2>
        
        <div className={styles.content}>
          {/* Main Content */}
          <div className={styles.textContent}>
            <p className={styles.intro}>
              Hope is a beautiful mountain town that has Airbnbs, Hotels, and Bed and Breakfasts. 
              Our shuttle service can accommodate anyone staying within the Hope area.
            </p>

            <div className={styles.bookingNote}>
              <p>
                <strong>Once you book your accommodation in Hope, please contact Kara or Jeremy 
                so they can add your pickup location to the bus schedule.</strong>
              </p>
            </div>

            {/* Hope Section */}
            <div className={styles.locationSection}>
              <div className={styles.locationHeader}>
                <div className={`${styles.locationIcon} ${styles.mountainIcon}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L21 20H3L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.locationTitle}>Hope Area</h3>
              </div>
              <div className={styles.locationContent}>
                <p>
                  Hope offers a variety of accommodation options with stunning mountain views. 
                  This is the most convenient option as it&apos;s included in our shuttle service.
                </p>
                <div className={styles.locationTip}>
                  <p><strong>Recommended for:</strong> Guests who want the easiest transportation to and from the venue.</p>
                </div>
              </div>
            </div>

            {/* Harrison Section */}
            <div className={styles.locationSection}>
              <div className={styles.locationHeader}>
                <div className={`${styles.locationIcon} ${styles.springsIcon}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C8 16 9.5 14 12 14C14.5 14 16 16 16 16C16 16 14.5 18 12 18C9.5 18 8 16 8 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 16H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8V4H16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.locationTitle}>Harrison Hot Springs</h3>
              </div>
              <div className={styles.locationContent}>
                <p>
                  Harrison Hot Springs is a charming resort town located on the beautiful Harrison Lake. 
                  It&apos;s about 30 minutes from our venue.
                </p>
                <div className={styles.locationNote}>
                  <p>
                    <strong>Transportation:</strong> If you choose to stay here, please plan to arrange your own 
                    transportation to and from the venue by car or taxi.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className={styles.importantWarning}>
              <div className={`${styles.locationIcon} ${styles.warningIcon}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.3397 16C2.5699 17.3333 3.53216 19 5.07183 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.warningContent}>
                <h4 className={styles.warningTitle}>Important Booking Note</h4>
                <p>
                  When searching for Airbnbs in Hope, you may notice listings in nearby areas like 
                  Sunshine Valley, Agassiz, and Harrison. While these locations often appear in search 
                  results, they are 20–45 minutes from our venue.
                </p>
                <p className={styles.warningHighlight}>
                  If you choose to stay in one of these areas, please ensure you arrange transportation 
                  to and from the venue in advance.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Banner - Now with duplicated images for seamless loop */}
          <div className={styles.photoBanner}>
            <div className={styles.bannerContainer}>
              {duplicatedBannerImages.map((src, index) => (
                <div key={index} className={styles.bannerImageWrapper}>
                  <Image 
                    src={src}
                    alt={`Hope scenery ${index + 1}`}
                    width={200}
                    height={150}
                    className={styles.bannerImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Recommendation */}
          <div className={styles.finalRecommendation}>
            <p>
              <strong>Our recommendation:</strong> Stay in Hope for the most convenient experience and 
              take advantage of our complimentary shuttle service!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}