import React from "react";
import { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        // setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle any errors that occur during the data fetching process
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return (
      <div>
        
      </div>
    );
  };
  
  export default ProductList;  
