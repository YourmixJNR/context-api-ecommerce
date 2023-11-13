import React, { useState, useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);

  const handleChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
 };
 
  const handleDelete = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="col-md-9 col-sm-8 content">
        <div className="row">
          <div className="col-md-12">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Cart</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-info panel-shadow">
              <div className="panel-heading">
                <h3>
                  <img
                    className="img-circle img-thumbnail"
                    src="http://abbrefy.xyz/76bb2f3"
                    style={{ width: "100px" }}
                  />
                  Michael Victor
                </h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.image} className="img-cart" />
                          </td>
                          <td>
                            <strong>{item.name}</strong>
                            <p>Size: {item.size}</p>
                          </td>
                          <td>
                            <div className="form-inline">
                              <input
                                className="form-control"
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleChange(e, item)}
                              />
                              <button rel="tooltip" className="btn btn-default">
                                <i className="fa fa-pencil" />
                              </button>
                              <span
                                className="btn btn-primary"
                                onClick={() => {
                                  handleDelete(item.id);
                                }}
                              >
                                <i className="fa fa-trash-o"></i>
                              </span>
                            </div>
                          </td>
                          <td>${item.price}</td>
                          <td>${item.quantity * item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
