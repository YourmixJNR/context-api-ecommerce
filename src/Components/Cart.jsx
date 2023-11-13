import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="col-md-9 col-sm-8 content">
        <div className="row">
          <div className="col-md-12">
            <ol className="breadcrumb">
              <li>
                <Link to="/">
                  Home
                </Link>
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
                    style={{width : '100px'}}
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
                      <tr>
                        <td>
                          <img
                            src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                            className="img-cart"
                          />
                        </td>
                        <td>
                          <strong>Product 1</strong>
                          <p>Size : 26</p>
                        </td>
                        <td>
                          <form className="form-inline">
                            <input className="form-control" type="text" value="1" />
                            <button rel="tooltip" className="btn btn-default">
                              <i className="fa fa-pencil" />
                            </button>
                            <a href="#" className="btn btn-primary">
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </form>
                        </td>
                        <td>$54.00</td>
                        <td>$54.00</td>
                      </tr>

                      <tr>
                        <td colspan="6">&nbsp;</td>
                      </tr>
                      <tr>
                        <td colspan="4" className="text-right">
                          Total Product
                        </td>
                        <td>$86.00</td>
                      </tr>
                      <tr>
                        <td colspan="4" className="text-right">
                          Total Shipping
                        </td>
                        <td>$2.00</td>
                      </tr>
                      <tr>
                        <td colspan="4" className="text-right">
                          <strong>Total</strong>
                        </td>
                        <td>$88.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-success">
              <span className="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue
              Shopping
            </a>
            <a href="#" className="btn btn-primary pull-right">
              Next<span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
