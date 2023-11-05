import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const FetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle any errors that occur during the data fetching process
    }
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div key={product.id} className="container">
      <div className="row justify-content-center">
        <div className="col col-lg-6">
          <div className="text-center mt-5">
            <img className="product-image" src={product.image} alt="" />
            <h4 className="product-4">{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
