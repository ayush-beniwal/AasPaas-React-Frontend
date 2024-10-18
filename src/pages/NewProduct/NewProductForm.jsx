import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewProductForm.module.css"; 
import Navbar from "../../Components/Navbar/Navbar";
import FooterL from "../../Components/FooterL/FooterL";

const NewProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    tag: "",
    brand: "",
    images: [],
  });
  const [errorMessage, setErrorMessage] = useState(""); // For managing error messages
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + formData.images.length > 5) {
      // Set the error message if more than 5 images are selected
      setErrorMessage("You can only upload up to 5 images.");
    } else {
      // Update formData with the selected images and clear the error message
      setFormData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...files].slice(0, 5), // Only allow up to 5 images
      }));
      setErrorMessage(""); // Clear any previous error
    }
  };
  const handleClearImages = () => {
    setFormData((prevData) => ({
      ...prevData,
      images: [], // Clear the images array
    }));
    setErrorMessage(""); // Clear any error message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
  };
  
  return (
    <div>
      <Navbar />
      <div className={styles.formContainer}>
        <h2>Sell a New Product</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="images">Upload Images</label>
            <div className={styles.fileInputWrapper}>
              <label htmlFor="images" className={styles.customFileButton}>
                Choose Files
              </label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleImageChange}
                multiple
                accept="image/*"
                className={styles.fileInput}
              />
              <span className={styles.fileChosenText}>
                {formData.images.length > 0
                  ? formData.images.map((file) => file.name).join(", ")
                  : "No file chosen"}
              </span>
            </div>

            {/* Display error message if it exists */}
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}

            {/* Add a Clear button */}
            {formData.images.length > 0 && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => handleClearImages()}
              >
                Clear Images
              </button>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <FooterL />
    </div>
  );
};

export default NewProductForm;
