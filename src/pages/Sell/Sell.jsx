import styles from "./Sell.module.css";
import { Link } from "react-router-dom";

function Sell() {
  return (
    <div id="youraccount">
      <div className={styles.box}>
        <div className={styles.heading}>Sell and Manage Products</div>
        <div className={styles.sections}>
          <Link to="/products/selectCategory">
            <div className={styles.account}>
              <div>
                <img
                  src="https://res.cloudinary.com/sairev/image/upload/v1661367654/AasPaas/Files/Profile%20Images/sell_option_bfagmg.png"
                  alt="Sell a new product"
                  className={styles.sellimg}
                />
              </div>
              <div className={styles.text}>
                <p className={styles.head}>Sell a new product</p>
                <p className={styles.sub}>Add a new product for listing</p>
              </div>
            </div>
          </Link>
          <Link to="/users/listedProducts">
            <div className={styles.account}>
              <div>
                <img
                  src="https://res.cloudinary.com/aaspaas/image/upload/v1666902404/SellPage/manage_product_naqlf5.png"
                  alt="Manage listed products"
                  className={styles.deleteimg}
                />
              </div>
              <div className={styles.text}>
                <p className={styles.head}>Manage your listed products</p>
                <p className={styles.sub}>
                  Manage and edit info regarding previously listed products
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sell;
