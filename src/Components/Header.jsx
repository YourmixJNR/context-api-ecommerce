import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
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
              <img src="/cart-icon.png" alt="" />
              <span>Cart</span>
              <span class="cart-count">3</span>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
