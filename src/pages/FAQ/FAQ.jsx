import { useState } from 'react';
import styles from './FAQ.module.css';
import Navbar from '../../Components/Navbar/Navbar';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'What is AasPaas?',
      answer: `AasPaas is a student-built project for listing and buying 2nd hand products inside the college. It solves issues faced by students trying to get or sell things like cycles, notes, appliances, and other items. Buyers can lock products, and after a review, the information will be exchanged. AasPaas doesn’t handle financials to avoid scams.`,
    },
    {
      question: 'How to login and register?',
      answer: `AasPaas allows you to register and log in to list and purchase second-hand items. The process is simple and secure. You will need to provide your name, email, and password to get started.`,
    },
    {
      question: 'Who can see my info?',
      answer: `Only the seller or buyer can access your contact details after locking the product. AasPaas ensures that your information is shared only when necessary.`,
    },
    {
      question: "What is 'Locking' Products? What happens after I lock a product?",
      answer: `Locking a product reserves it for you. After you lock a product, a review process occurs, and once completed, your contact details will be shared with the seller for final negotiations.`,
    },
    {
      question: 'How do I list products to sell?',
      answer: `To list products, you need to create an account. Once logged in, click on 'Sell a Product,' fill in the details, and upload images. After submission, your product will be listed.`,
    },
    {
      question: 'How to contact and negotiate with the buyers for my products?',
      answer: `Once a product is locked, both the buyer and seller receive each other's contact information, allowing them to communicate directly for finalizing the sale.`,
    },
  ];

  return (
    <div>
    <Navbar />
    <div className={styles.container1}>
        
      <div className={styles.faq}>
        <div className={styles.title}>FAQs</div>
        <div className={styles.boxes}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.accordion_item}>
              <h2 className={styles.accordion_header}>
                <button
                  className={styles.accordion_button}
                  onClick={() => handleToggle(index)}
                  style={{ fontSize: '25px', fontFamily: 'Inter', fontWeight: '600' }}
                >
                  {item.question}
                </button>
              </h2>
              <div
                className={`${styles.accordion_collapse} ${activeIndex === index ? styles.show : ''}`}
                style={{ fontFamily: 'Arial', fontSize: '20px', color: '#000000' }}
              >
                <div className={styles.accordion_body}>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default FAQ;
