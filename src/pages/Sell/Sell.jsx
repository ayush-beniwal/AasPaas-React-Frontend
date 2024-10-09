import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'; // Assuming Navbar component exists here
import FooterL from '../../Components/FooterL/FooterL'; // Assuming Footer component exists here
import styles from './Sell.module.css';

function Sell() {
  return (
    <>
      <Navbar />
      <div id="youraccount" className={styles.pageContainer}>
        <div className={styles.box}>
          <h1 className={styles.heading}>Sell and Manage Products</h1>
          <div className={styles.sections}>
            <Link to="/sell/new-product" className={styles.link}>
              <div className={styles.account}>
                <div>
                  <img
                    src="https://foundr.com/wp-content/uploads/2024/04/shopping-cart-abandonment.png"
                    alt="Sell a new product"
                    className={styles.sellimg}
                  />
                </div>
                <div className={styles.text}>
                  <p className={styles.head}>Sell a New Product</p>
                  <p className={styles.sub}>Add a new product for listing</p>
                </div>
              </div>
            </Link>
            <Link to="/users/listedProducts" className={styles.link}>
              <div className={styles.account}>
                <div>
                  <img
                    src="https://res.cloudinary.com/aaspaas/image/upload/v1666902404/SellPage/manage_product_naqlf5.png"
                    alt="Manage listed products"
                    className={styles.deleteimg}
                  />
                </div>
                <div className={styles.text}>
                  <p className={styles.head}>Manage Your Listed Products</p>
                  <p className={styles.sub}>Edit info regarding previously listed products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <FooterL />
    </>
  );
}

export default Sell;
