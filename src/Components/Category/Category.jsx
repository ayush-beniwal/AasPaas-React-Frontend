import React, { useState, useEffect } from 'react';
import styles from "./Category.module.css";
import Electronics from "../../assets/Categories/Electronics.webp";
import Miscellaneous from "../../assets/Categories/Miscellaneous.webp";
import Mobile_Phones from "../../assets/Categories/Mobile_Phones.webp";
import Stationary from "../../assets/Categories/Stationary.webp";
import Appliances from "../../assets/Categories/Appliances.webp";
import Books_and_Notes from "../../assets/Categories/Books_and_Notes.webp";
import Cycles from "../../assets/Categories/Cycles.webp";

function Category() {
  const categories = [
    { name: "Electronics", image: Electronics },
    { name: "Stationary", image: Stationary },
    { name: "Mobile Phones", image: Mobile_Phones },
    { name: "Cycles", image: Cycles },
    { name: "Appliances", image: Appliances },
    { name: "Books & Notes", image: Books_and_Notes },
    { name: "Miscellaneous", image: Miscellaneous },
  ];

  // State to track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Event listener to track resize events
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine if categories should be hidden based on screen width
  const shouldHideCategory = (category) => {
    if (screenWidth <= 500 && (category.name === "Mobile Phones" || category.name === "Electronics")) {
      return true;
    }
    if (screenWidth <= 1250 && category.name === "Miscellaneous") {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        {categories.map((category, index) =>
          shouldHideCategory(category) ? null : (
            <div key={index} className={styles.cover}>
              <img alt={category.name} src={category.image} className={styles.img2} />
              <span className={styles.text}>{category.name}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Category;
