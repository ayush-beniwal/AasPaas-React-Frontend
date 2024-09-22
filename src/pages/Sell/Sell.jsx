import styles from "./Sell.module.css";

function Sell() {
  return (
    <div id="youraccount">
      <div className={styles.box}>
        <div className={styles.heading}>Sell and Manage Products</div>
        <div className={styles.sections}>
          <a href="/products/selectCategory">
            <div className={styles.account}>
              <div>
                <img
                  src="https://res.cloudinary.com/sairev/image/upload/v1661367654/AasPaas/Files/Profile%20Images/sell_option_bfagmg.png"
                  className={styles.sellimg}
                />
              </div>
              <div className={styles.text}>
                <li className={styles.head}>Sell a new product</li>
                <li className={styles.sub}>Add a new product for listing</li>
              </div>
            </div>
          </a>
          <a href="/users/listedProducts">
            <div className={styles.account}>
              <div>
                <img
                  src="https://res.cloudinary.com/aaspaas/image/upload/v1666902404/SellPage/manage_product_naqlf5.png"
                  className={styles.deleteimg}
                />
              </div>
              <div className={styles.text}>
                <li className={styles.head}>Manage your listed products</li>
                <li className={styles.sub}>
                  Manage and edit info regarding previously listed products
                </li>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sell;
