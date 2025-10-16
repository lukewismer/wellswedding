import Image from 'next/image';
import styles from './page.module.css';

export default function Details() {
  return (
    <main>
      <section className={`section ${styles.hero}`}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Wedding Details</h1>
          <p className={styles.heroSubtitle}>Everything you need to know for our special day</p>
        </div>
      </section>

      <section id="itinerary" className={`section ${styles.itinerary}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>The Day&apos;s Events</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTime}>3:30 PM</div>
                <h3 className={styles.timelineTitle}>Guest Arrival</h3>
                <p className={styles.timelineDescription}>
                  Welcome drinks and seating at the ceremony venue. Take a moment to enjoy the beautiful surroundings.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTime}>4:00 PM</div>
                <h3 className={styles.timelineTitle}>Ceremony</h3>
                <p className={styles.timelineDescription}>
                  Our wedding ceremony begins. Join us as we exchange vows in the garden overlooking the mountains.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTime}>5:00 PM</div>
                <h3 className={styles.timelineTitle}>Cocktail Reception</h3>
                <p className={styles.timelineDescription}>
                  Refreshments and hors d&apos;oeuvres while we take our wedding photos. Mingle and enjoy the mountain view.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTime}>6:00 PM</div>
                <h3 className={styles.timelineTitle}>Reception &amp; Dinner</h3>
                <p className={styles.timelineDescription}>
                  Seated dinner in the main hall. Speeches, toasts, and a delicious three-course meal.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTime}>8:00 PM</div>
                <h3 className={styles.timelineTitle}>Dancing &amp; Celebration</h3>
                <p className={styles.timelineDescription}>
                  First dance followed by open dancing. Dessert bar and late-night snacks available.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTime}>11:00 PM</div>
                <h3 className={styles.timelineTitle}>Farewell</h3>
                <p className={styles.timelineDescription}>
                  Sparkler send-off. Thank you for celebrating with us!
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="gifts" className={`section ${styles.gifts}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Gift Registry</h2>
          <div className={styles.giftsContent}>
            <div className={styles.giftsText}>
              <p className={styles.giftsDescription}>
                Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
                we have registered at the following locations. We&apos;re also saving for our future home and honeymoon.
              </p>
              
              <div className={styles.registryList}>
                <div className={styles.registryItem}>
                  <h3 className={styles.registryTitle}>Bed Bath &amp; Beyond</h3>
                  <p className={styles.registryDescription}>
                    Home essentials and kitchenware for our new life together
                  </p>
                  <a href="#" className={`btn ${styles.registryLink}`}>View Registry</a>
                </div>

                <div className={styles.registryItem}>
                  <h3 className={styles.registryTitle}>Amazon</h3>
                  <p className={styles.registryDescription}>
                    Various items from our wishlist for our future home
                  </p>
                  <a href="#" className={`btn ${styles.registryLink}`}>View Registry</a>
                </div>

                <div className={styles.registryItem}>
                  <h3 className={styles.registryTitle}>Honeymoon Fund</h3>
                  <p className={styles.registryDescription}>
                    Contribute to our dream honeymoon in Italy
                  </p>
                  <a href="#" className={`btn ${styles.registryLink}`}>Contribute</a>
                </div>
              </div>
            </div>
            
            <div className={styles.giftsImage}>
              <Image 
                src="/images/engagement.png"
                alt="Jeremy and Kara"
                width={400}
                height={500}
                className={styles.engagementImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="accommodations" className={`section ${styles.accommodations}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Places to Stay</h2>
          <p className={styles.accommodationsIntro}>
            We&apos;ve reserved room blocks at these nearby hotels. Be sure to mention &quot;Kara &amp; Jeremy Wedding&quot; when booking.
          </p>
          
          <div className={styles.hotelsGrid}>
            <div className={styles.hotelCard}>
              <div className={styles.hotelImage}>
                <Image 
                  src="/images/engagement.png"
                  alt="Mountain View Lodge"
                  width={300}
                  height={200}
                  className={styles.hotelImg}
                />
              </div>
              <div className={styles.hotelInfo}>
                <h3 className={styles.hotelName}>Mountain View Lodge</h3>
                <p className={styles.hotelDistance}>5 miles from venue</p>
                <p className={styles.hotelDescription}>
                  Beautiful lodge with stunning mountain views. Complimentary breakfast and shuttle service.
                </p>
                <div className={styles.hotelDetails}>
                  <p className={styles.hotelPrice}>$189/night</p>
                  <p className={styles.hotelContact}>Phone: (555) 123-4567</p>
                </div>
                <a href="#" className={`btn ${styles.hotelLink}`}>Book Now</a>
              </div>
            </div>

            <div className={styles.hotelCard}>
              <div className={styles.hotelImage}>
                <Image 
                  src="/images/engagement.png"
                  alt="Riverside Inn"
                  width={300}
                  height={200}
                  className={styles.hotelImg}
                />
              </div>
              <div className={styles.hotelInfo}>
                <h3 className={styles.hotelName}>Riverside Inn</h3>
                <p className={styles.hotelDistance}>3 miles from venue</p>
                <p className={styles.hotelDescription}>
                  Charming boutique hotel with river views. Walking distance to downtown restaurants.
                </p>
                <div className={styles.hotelDetails}>
                  <p className={styles.hotelPrice}>$165/night</p>
                  <p className={styles.hotelContact}>Phone: (555) 234-5678</p>
                </div>
                <a href="#" className={`btn ${styles.hotelLink}`}>Book Now</a>
              </div>
            </div>

            <div className={styles.hotelCard}>
              <div className={styles.hotelImage}>
                <Image 
                  src="/images/engagement.png"
                  alt="The Grand Hotel"
                  width={300}
                  height={200}
                  className={styles.hotelImg}
                />
              </div>
              <div className={styles.hotelInfo}>
                <h3 className={styles.hotelName}>The Grand Hotel</h3>
                <p className={styles.hotelDistance}>7 miles from venue</p>
                <p className={styles.hotelDescription}>
                  Luxury accommodations with spa and fine dining. Perfect for extending your stay.
                </p>
                <div className={styles.hotelDetails}>
                  <p className={styles.hotelPrice}>$225/night</p>
                  <p className={styles.hotelContact}>Phone: (555) 345-6789</p>
                </div>
                <a href="#" className={`btn ${styles.hotelLink}`}>Book Now</a>
              </div>
            </div>
          </div>

          <div className={styles.transportation}>
            <h3 className={styles.transportationTitle}>Transportation</h3>
            <p className={styles.transportationText}>
              Shuttle service will be provided between the venue and Hope. 
              The shuttle will run from 5:00 PM to 12:00 AM. 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
