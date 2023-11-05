import React from "react";
import { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setProducts(data);
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
        {products.map((product, index) => (
          <div key={index}>
            <img 
            src={product.image}
            alt="Product Image"
            />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;  
