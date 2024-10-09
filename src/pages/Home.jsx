import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Category from "../Components/Category/Category";
import ProductCover from "../Components/ProductCover/ProductCover";
import Slider from "../Components/Slider/Slider";
import FooterL from "../Components/FooterL/FooterL";
import styles from "./Home.module.css";

function Home() {
  const [count, setCount] = useState(3); // Default count for Recently Added/Trending
  const [imagesInView, setImagesInView] = useState(false); // For card animations
  const [products, setProducts] = useState([]); // Store fetched products
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("your-server-api-url-here"); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data); // Store all fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCount(window.innerWidth < 1200 ? 4 : 3); // Adjust Recently Added/Trending count based on width
    };

    // Set initial count and width on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImagesInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.9 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Determine the number of services to show based on window width
  const getServiceCount = (width) => {
    if (width <= 450) return 2;
    if (width <= 700) return 2;
    return 3;
  };

  // Services content
  const services = [
    {
      img: "https://im.indiatimes.in/content/2015/May/bangalore_1431434983.jpg?w=640&h=427&cc=1&webp=1&q=75",
      alt: "Textbooks and Study Materials",
      title: "Textbooks and Study Materials",
      description: "Find second-hand textbooks and study materials at affordable prices.",
    },
    {
      img: "https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg",
      alt: "Electronics and Gadgets",
      title: "Electronics and Gadgets",
      description: "Shop for pre-owned electronics and gadgets that fit your budget.",
    },
    {
      img: "https://images.jdmagicbox.com/comp/nagpur/v4/0712px712.x712.151210135206.u2v4/catalogue/g-r-coolers-and-electronics-hanuman-nagar-nagpur-air-cooler-dealers-yu5eqy5f1j.jpg",
      alt: "Furniture and Home Essentials",
      title: "Coolers and Summer Essentials",
      description: "Discover gently used coolers and room essentials for your space.",
    },
  ];

  // Filter services based on window width
  const filteredServices = services.slice(0, getServiceCount(windowWidth)).filter((service, index) => {
    if (windowWidth <= 450 && index === 0) return false;
    return true;
  });

  return (
    <>
      <Navbar />
      <Category />
      <Slider />
      <div className={styles.recent}>
        <ProductCover header="Recently Added" count={count} />
        <ProductCover className={styles.trend} header="Trending Right Now" count={count} />
      </div>

      <div className={styles.landImage} ref={sectionRef}>
        <div className={styles.cardGroups}>
          <div className={styles.cardGroup}>
            <div
              className={`${styles.bigCard} ${styles.card} ${imagesInView ? styles.animateCard1 : ""}`}
            ></div>
            <div
              className={`${styles.bigCard} ${styles.card} ${imagesInView ? styles.animateCard2 : ""}`}
            ></div>
            <div
              className={`${styles.bigCard} ${styles.card} ${imagesInView ? styles.animateCard3 : ""}`}
            ></div>
            <div
              className={`${styles.bigCard} ${styles.card} ${imagesInView ? styles.animateCard4 : ""}`}
            ></div>
          </div>
        </div>
      </div>

      <h2 className={styles.exploreMore}>Explore More</h2>
      <div className={styles.topimage}>
        <div className={styles.freshers1}>
          <ProductCover header="Other Deals" count={30} />
        </div>
      </div>
      
      <div className={styles.featuredServices}>
        <div className={styles.servicesList}>
          {filteredServices.map((service, index) => (
            <div key={index} className={styles.service}>
              <img src={service.img} alt={service.alt} />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <FooterL />
    </>
  );
}

export default Home;
