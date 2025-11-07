'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Can I bring a plus-one or my kids?",
      answer: "Please note that due to limited space, we are only able to accommodate those named on the invitation envelope. Our wedding will be an adults-only event, as the venue is not well suited for children. We truly appreciate your understanding."
    },
    {
      id: 2,
      question: "When to arrive?",
      answer: "The venue will be open to guests at 3:00pm. Please arrive no later than 3:45pm as the ceremony will begin promptly at 4:00pm."
    },
    {
      id: 3,
      question: "Seating?",
      answer: "The ceremony will be held on a tiered deck overlooking the Fraser Canyon. The lower deck seating will be reserved for immediate family and wedding parties. There is an upper deck with additional seating for our guests and will ask that some guests who are willing and able stand for the ceremony."
    },
    {
      id: 4,
      question: "The Bar?",
      answer: "The bar will open after the ceremony with the last call being around 1 am. Drink tickets can be purchased with CASH ONLY at $2 each. *We will not have change at the wedding!"
    },
    {
      id: 5,
      question: "Bus Schedule?",
      answer: "If you are staying in Hope, please let Kara or Jeremy know the address of your accommodation. They will finalize the bus schedule closer to the date of the wedding."
    },
    {
      id: 6,
      question: "Dinner?",
      answer: "The dinner will be catered by Hugo's Mexican Kitchen"
    },
    {
      id: 7,
      question: "Driving Instructions?",
      answer: "From Vancouver/ Abbotsford/ Chilliwack, take highway 1 east to Hope. Take exit 170 the Cache Creek / Prince George exit. Follow the signs for Cache Creek out of Hope. You will start to climb out of Hope, after around 5k you will see Lake of the Woods Motel on the left and the Cariboo Trail Trailer park. Immediately after, look for the Gravel Road Entrance - American Creek Forestry Service Road (FSR) on the left side of the highway. Turn left and follow up American Creek Forestry Service Road. American Creek Lodge is just past the 0.5K marker. It is the first driveway with gates on the right. It will be marked for the wedding. If you get to the 1k marker you have gone too far."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.regularFont}>FREQUENTLY ASKED</span>
            <span className={styles.italicFont}>Questions</span>
          </h1>
        </div>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={item.id} className={styles.faqItem}>
              {/* Top line for all items */}
              <div className={styles.line}></div>
              
              <button
                className={styles.questionButton}
                onClick={() => toggleItem(item.id)}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={`${styles.plusMinus} ${openItem === item.id ? styles.minus : styles.plus}`}>
                  {openItem === item.id ? '−' : '+'}
                </span>
              </button>
              
              {/* Bottom line for last item */}
              {index === faqData.length - 1 && (
                <div className={styles.line}></div>
              )}
              
              {openItem === item.id && (
                <div className={styles.answerContainer}>
                  <div className={styles.answer}>
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}