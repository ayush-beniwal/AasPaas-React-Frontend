import styles from "./FooterL.module.css";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function FooterL() {
  return (
    <footer>
      <div className={styles.cont}>
        <div className={styles.left_box}>
          <h1>
            OneStop solution for
            <br /> all your college needs!
          </h1>
          <div className={styles.more_info}>
            Buy or Sell whatever you need at
            <br /> your fingertips , in IIT BHU itself
          </div>
        </div>

        <div className={styles.right_box}>
          <div>You can mail us at</div>
          <a href="mailto: aaspaas.69@gmail.com">
            <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666902500/Social/Gmail_logo_ja3tqw.png" />
            <span>&nbsp;&nbsp; aaspaas.69@gmail.com</span>
          </a>
          <div className={styles.check_out}>
            Check us out on &nbsp;
            <a href="">
              <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666904062/Social/BNW_Instagram_kphacq.png" />
            </a>
            &nbsp;
            <a href="">
              <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666904063/Social/BNW_Linkdin_eqmzbn.png" />
            </a>
            &nbsp;
            <a href="">
              <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666904062/Social/BNW_Youtube_okokd3.png" />
            </a>
          </div>
        </div>

        <div className={styles.hr}></div>
        <div className={styles.footer_boxes}>
          <div className={styles.footer_logo}>
            <img
              onClick="window.location.href = '/'"
              src="https://res.cloudinary.com/aaspaas/image/upload/v1666903174/Social/AasPaas_White_etdgpp.png"
            />
          </div>
          <div className={styles.address}>
            <div
              onClick="window.location.href = 'https://www.iitbhu.ac.in/'"
              className={styles.address_logo}
            >
              <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666903864/Backgrounds/Group_3614_nldmvf.png" />
            </div>
            <div
              onClick="window.location.href = 'https://www.iitbhu.ac.in/'"
              className={styles.address_desc}
            >
              Indian Institute Of Technology
              <br />
              (Banaras Hindu University)
              <br />
              Varanasi. India
              <br />
              PIN: 221005
            </div>
          </div>
          <div className={styles.quick_links}>
            <div className={styles.box_1}>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/users/orders">Orders</a>
                </li>
                <li>
                  <a href="/users/sell">Sell</a>
                </li>
              </ul>
            </div>
            <div className={styles.box_2}>
              <ul>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="/users/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={styles.box_3}>
              <button onClick={scrollToTop} className={styles.back_to_top_btn}>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterL;
