import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div>
      
    </div>
  );
};

export default Cart;
