import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <div data-bs-theme="dark">
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <h4>Welcome to Our Store</h4>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
