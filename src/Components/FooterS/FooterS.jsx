import styles from "./FooterS.module.css";

function FooterS() {
  return (
    <footer>
      <div className={styles.footer_logo}>
        <img
          //   onclick="window.location.href = '/'"
          src="https://res.cloudinary.com/aaspaas/image/upload/v1666903174/Social/AasPaas_White_etdgpp.png"
        />
      </div>
      <div className={styles.footer_address}>
        <img
          //   onclick="window.location.href = 'https://www.iitbhu.ac.in/'"
          src="https://res.cloudinary.com/aaspaas/image/upload/v1666903864/Backgrounds/Group_3614_nldmvf.png"
        />
        <div
          //   onclick="window.location.href = 'https://www.iitbhu.ac.in/'"
          className={styles.address}
        >
          Indian Institute Of Technology (BHU) Varanasi
          <br />
          PIN: 221005
        </div>
      </div>
      <div className={styles.footer_contact}>
        <h4>Mail us at :</h4>
        <a href="mailto:aaspaas.69@gmail.com">
          &nbsp;
          <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666902500/Social/Gmail_logo_ja3tqw.png" />
          aaspaas.69@gmail.com
        </a>
        <p>
          Check us out on : &nbsp;
          <a href="">
            <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666904062/Social/BNW_Instagram_kphacq.png" />
          </a>
          <a href="">
            <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666904063/Social/BNW_Linkdin_eqmzbn.png" />
          </a>
          <a href="">
            <img src="https://res.cloudinary.com/aaspaas/image/upload/v1666904062/Social/BNW_Youtube_okokd3.png" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default FooterS;
