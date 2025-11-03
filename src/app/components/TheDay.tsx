import Image from 'next/image';
import styles from './TheDay.module.css';

export default function TheDay() {
  const events = [
    {
      time: '3:00 PM',
      title: 'Venue Opens',
      description: 'The venue will be open to guests',
      icon: '/icons/venue-opens.png'
    },
    {
      time: '4:00 PM',
      title: 'Ceremony Begins',
      description: 'Please be seated by 3:45 PM',
      icon: '/icons/ceremony.png'
    },
    {
      time: '4:30 PM',
      title: 'Cocktail Hour',
      description: 'Refreshments and mingling',
      icon: '/icons/cocktail.png'
    },
    {
      time: '6:00 PM',
      title: 'Dinner',
      description: 'Seated dinner service begins',
      icon: '/icons/food.png'
    },
    {
      time: '8:00 PM',
      title: 'Dancing',
      description: 'First dance and open dancing',
      icon: '/icons/dance.png'
    },
    {
      time: '9:00 PM',
      title: 'Dessert',
      description: 'Dessert bar opens',
      icon: '/icons/dessert.png'
    },
    {
      time: '1:00 AM',
      title: 'Bar Closes',
      description: 'Last call for drinks',
      icon: '/icons/close.png'
    }
  ];

  return (
    <section className={`section ${styles.theDay}`}>
      <div className={styles.backgroundOverlay}></div>
      <div className="container">
        <h2 className={styles.theDayTitle}>
          The Day
        </h2>
        
        <div className={styles.subheader}>
          <p className={styles.subheaderText}>
            The venue will be open to guests at 3:00pm. Please arrive no later than 3:45pm as the ceremony will begin promptly at 4:00pm.
          </p>
        </div>

        <div className={styles.eventGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventIcon}>
                <Image 
                  src={event.icon}
                  alt={event.title}
                  width={35}
                  height={35}
                />
              </div>
              <h3 className={styles.eventTitle}>
                {event.title}
              </h3>
              <p className={styles.eventTime}>
                {event.time}
              </p>
              <p className={styles.eventDescription}>
                {event.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <p className={styles.additionalInfoText}>
            All events will be held at the beautiful American Creek Lodge
          </p>
        </div>
      </div>
    </section>
  );
}