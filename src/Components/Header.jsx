import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header data-bs-theme="dark">
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <h4>Welcome to Our Store</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;