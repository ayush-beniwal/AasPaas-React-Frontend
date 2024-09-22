import React from 'react';
import styles from "./FilteredProductCover.module.css"; // Ensure you have the CSS file for styling
import Product from "../Product/Product";

function FilteredProductCover({ products }) {
  if (!products || products.length === 0) {
    return <div>No products found matching your search.</div>;
  }

  return (
    <div className={styles.trending}>
      {/* Header is always fixed as "Search Results" */}
      <div className={styles.head}>Similar Products</div>
      
      {/* Product list */}
      <div className={styles.productCover}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FilteredProductCover;
