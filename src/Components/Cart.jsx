import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div>
      
    </div>
  );
};

export default Cart;
