import styles from "./ProductCover.module.css";
import { useFetchProductsQuery } from "../../store";
import Product from "../Product/Product";

function ProductCover({ count, header, products }) {
  // Fetch data only if products prop is not provided
  const { data, error, isFetching } = products ? { data: products } : useFetchProductsQuery(count);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.trending}>
      {header ? <div className={styles.head}>{header}</div> : ""}
      <div className={styles.productCover}>
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCover;
