import styles from "./Error404.module.css";
import Navbar from "../../Components/Navbar/Navbar";
function Error404() {
  return (
    <div>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.imgClass}>
        <img
          src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
          alt="404 Not Found"
        />
      </div>
    </div>
    </div>
  );
}

export default Error404;
