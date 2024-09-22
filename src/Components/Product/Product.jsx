import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

function Product({ product }) {
  const NewUrl = product.images[0].url
  // .replace(
  //   "/upload",
  //   "/upload/c_scale,h_178,w_183/f_webp/q_auto:eco/l_Social:AasPaas_Black_mdqn23.png/c_scale,h_12,w_50/fl_layer_apply,g_south_east,x_5,y_5"
  // );

  return (
    <Link to={`/products?id=${product._id}`}>
      <div className={styles.product}>
        <ProgressiveImage loading="lazy" alt="product" src={NewUrl} />
        <div className={styles.productContent}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.price}>₹{product.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
