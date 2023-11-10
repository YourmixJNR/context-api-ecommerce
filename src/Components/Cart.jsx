import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  console.log("Cart in Cart component:", cart);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Cart;
