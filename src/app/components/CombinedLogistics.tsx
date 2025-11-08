import Image from 'next/image';
import styles from './CombinedLogistics.module.css';

export default function CombinedLogistics() {
  const bannerImages = [
    '/images/hope-1.png',
    '/images/hope-2.png', 
    '/images/hope-10.png',
    '/images/hope-4.jpg',
    '/images/hope-5.png',
    '/images/hope-6.jpg',
    '/images/hope-7.jpg',
    '/images/hope-8.jpg',
    '/images/hope-9.jpg'
  ];

  const duplicatedBannerImages = [...bannerImages, ...bannerImages];

  return (
    <section id="logistics" className={`section ${styles.logistics}`}>
      <div className="container">
        {/* Getting Here Section */}
        <div className={styles.section}>
          <div className={styles.twoColumn}>
            <div className={styles.imageColumn}>
              <Image 
                src="/images/couple-transportation-1.png"
                alt="Transportation"
                width={500}
                height={600}
                className={styles.verticalImage}
              />
            </div>
            <div className={styles.textColumn}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.regularFont}>Getting</span>{' '}
                <span className={styles.italicFont}>here</span>
              </h2>
              
              <p className={styles.address}>
                American Creek Lodge is located at <strong>23200 Trans-Canada Highway, Hope, British Columbia</strong>.
              </p>

              <div className={styles.bulletList}>
                {/* By Car */}
                <div className={styles.bulletItem}>
                  <div className={styles.bulletHeader}>
                    <span className={styles.bullet}>•</span>
                    <h3 className={styles.bulletTitle}>By Car</h3>
                  </div>
                  <div className={styles.bulletContent}>
                    <p>Parking will be available at the venue. We will have family members directing drivers from 3:00-3:30 pm as to where they can park.</p>
                    <p><strong>Please do not drive if you plan on drinking</strong> as we ask that cars are not left parked onsite overnight.</p>
                  </div>
                </div>

                {/* By Shuttle */}
                <div className={styles.bulletItem}>
                  <div className={styles.bulletHeader}>
                    <span className={styles.bullet}>•</span>
                    <h3 className={styles.bulletTitle}>By Shuttle</h3>
                  </div>
                  <div className={styles.bulletContent}>
                    <p>We have hired a private bus service to shuttle guests to and from the venue on our wedding day.</p>
                    <p>Please note that the bus will only be transporting guests between the <strong>Hope area</strong> and the venue.</p>
                    <p><strong>Due to limited time, we cannot accommodate guests who choose to stay in:</strong> Chilliwack, Harrison, Agassiz, Sunshine Valley, or anywhere else outside Hope.</p>
                    <p>If you book accommodation in Hope, please contact Kara or Jeremy so they can add your pickup location to the bus schedule.</p>
                  </div>
                </div>

                {/* By Taxi */}
                <div className={styles.bulletItem}>
                  <div className={styles.bulletHeader}>
                    <span className={styles.bullet}>•</span>
                    <h3 className={styles.bulletTitle}>By Taxi</h3>
                  </div>
                  <div className={styles.bulletContent}>
                    <p>If you choose to stay outside the Hope area and require transportation, please use a taxi service.</p>
                    <p><strong>Uber does not operate reliably in the area.</strong></p>
                    <p>We recommend pre-booking your taxi for the return trip to ensure availability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Where to Stay Section */}
        <div className={styles.section}>
          <div className={styles.twoColumn}>
            <div className={styles.textColumn}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.regularFont}>Where to</span>{' '}
                <span className={styles.italicFont}>stay</span>
              </h2>
              
              <div className={styles.bulletList}>
                <div className={styles.introText}>
                  <p>Hope is a beautiful mountain town that has Airbnbs, Hotels, and Bed and Breakfasts. Our shuttle service can accommodate anyone staying within the Hope area.</p>
                </div>

                {/* Hope Area */}
                <div className={styles.bulletItem}>
                  <div className={styles.bulletHeader}>
                    <span className={styles.bullet}>•</span>
                    <h3 className={styles.bulletTitle}>Hope Area</h3>
                  </div>
                  <div className={styles.bulletContent}>
                    <p>Hope offers a variety of accommodation options with stunning mountain views. This is the most convenient option as it&apos;s included in our shuttle service.</p>
                    <p><strong>Recommended for:</strong> Guests who want the easiest transportation to and from the venue.</p>
                  </div>
                </div>

                {/* Harrison Hot Springs */}
                <div className={styles.bulletItem}>
                  <div className={styles.bulletHeader}>
                    <span className={styles.bullet}>•</span>
                    <h3 className={styles.bulletTitle}>Harrison Hot Springs</h3>
                  </div>
                  <div className={styles.bulletContent}>
                    <p>Harrison Hot Springs is a charming resort town located on the beautiful Harrison Lake. It&apos;s about 30 minutes from our venue.</p>
                    <p><strong>Transportation:</strong> If you choose to stay here, please plan to arrange your own transportation to and from the venue by car or taxi.</p>
                  </div>
                </div>

                <div className={styles.importantNote}>
                  <p><strong>Important Booking Note:</strong> When searching for Airbnbs in Hope, you may notice listings in nearby areas like Sunshine Valley, Agassiz, and Harrison. While these locations often appear in search results, they are 20–45 minutes from our venue.</p>
                  <p><strong>If you choose to stay in one of these areas, please ensure you arrange transportation to and from the venue in advance.</strong></p>
                </div>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <Image 
                src="/images/couple-transportation-2.jpg"
                alt="Accommodation"
                width={500}
                height={600}
                className={styles.verticalImage}
              />
            </div>
          </div>
        </div>

        {/* Photo Banner */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}