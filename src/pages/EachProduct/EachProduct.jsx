import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useFetchEachProductQuery, useFetchProductsQuery } from '../../store';
import styles from './EachProduct.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import FilteredProductCover from '../../Components/FilteredProductCover/FilteredProductCover';
import FooterL from '../../Components/FooterL/FooterL';

export default function EachProduct() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: currentProduct, error: currentProductError, isFetching: isCurrentProductFetching } = useFetchEachProductQuery(searchParams.get('id'));
  const { data: products, error: productsError, isFetching: isProductsFetching } = useFetchProductsQuery(1000);

  useEffect(() => {
    if (currentProduct) {
      setQuery(currentProduct.title.slice(0, 3));
    }
  }, [currentProduct]);

  // Redirect to home if there's an error or currentProduct is undefined
  useEffect(() => {
    if (currentProductError || productsError || !currentProduct) {
      navigate('/');
    }
  }, [currentProductError, productsError, currentProduct, navigate]);

  if (isCurrentProductFetching || isProductsFetching) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const getFilteredProducts = () => {
    if (!products || !currentProduct) return []; // Ensure currentProduct is defined

    const queryFilteredProducts = products.filter(product => {
      const title = product.title || product.name;
      return title?.toLowerCase().includes(query.toLowerCase());
    });

    const availableForRandom = products.filter(product => 
      product._id !== currentProduct._id && 
      !queryFilteredProducts.some(qfp => qfp._id === product._id)
    );

    const randomProducts = [];
    for (let i = 0; i < 3 && i < availableForRandom.length; i++) {
      const randomIndex = Math.floor(Math.random() * availableForRandom.length);
      randomProducts.push(availableForRandom[randomIndex]);
      availableForRandom.splice(randomIndex, 1);
    }

    return [...queryFilteredProducts, ...randomProducts];
  };

  const filteredProducts = getFilteredProducts();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentProduct.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentProduct.images.length) % currentProduct.images.length);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.productPage}>
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            {currentProduct.images.length > 1 ? (
              <div className={styles.imageSlider}>
                <button onClick={prevImage} className={styles.sliderButton}>❮</button>
                <img src={currentProduct.images[currentImageIndex].url} alt={currentProduct.title} className={styles.productImageMain} />
                <button onClick={nextImage} className={styles.sliderButton}>❯</button>
              </div>
            ) : (
              <img src={currentProduct.images[0].url} alt={currentProduct.title} className={styles.productImageMain} />
            )}
          </div>

          <div className={styles.productDetails}>
            <h1>{currentProduct.title}</h1>
            <p className={styles.availability}>Available</p>
            <p className={styles.price}>${currentProduct.price}</p>

            <div className={styles.sellerNote}>
              <h3>Seller's Note</h3>
              <p>{currentProduct.description}</p>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.lockButton}>Lock Product</button>
              <button className={styles.wishlistButton}>Add to Wishlist</button>
            </div>

            <div className={styles.reportLink}>
              <a href="#">🚩 Report Product</a>
            </div>
          </div>
        </div>

        <FilteredProductCover products={filteredProducts} />
      </div>
      <FooterL />
    </div>
  );
}
