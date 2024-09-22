import React, { useState, useEffect } from 'react';
import { useFetchProductsQuery } from "../../store"; // Fetch all products
import FilteredProductCover from "../../Components/FilteredProductCover/FilteredProductCover"; // Import the new component
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const { data: products, error, isFetching } = useFetchProductsQuery(1000); // Fetch all products
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query');
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location.search]); // Listen for changes in the search parameters

 

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter products based on the search query
  const filteredProducts = products.filter(product => {
    const title = product.title || product.name;
    return title?.toLowerCase().includes(query.toLowerCase());
  });

  
  return (
    <div>
      <Navbar />
      <FilteredProductCover products={filteredProducts} />
    </div>
  );
};

export default SearchPage;
