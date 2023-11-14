import React from "react";

const CartTotal = ({cart}) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      
    </>
  );
};

export default CartTotal;
