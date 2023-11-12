import React from "react";
import { Outlet } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useState, useEffect, useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {

  const { cart } = useContext(CartContext);

  const [cartNumber, setCartNumber] = useState(0);

  useEffect(() => {
    setCartNumber(cart.length);
  }, [cart]);

  return (
    <div data-bs-theme="dark">
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <div>
            <Link to="/">
              <h4>Welcome to Our Store</h4>
            </Link>
          </div>
          <div>
            <Link to="/cart" className="custom-link">
              <img
                src="/cart-icon.png"
                alt="" 
              />
              <span>Cart</span>
              <span className="cart-count">{cartNumber}</span>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
