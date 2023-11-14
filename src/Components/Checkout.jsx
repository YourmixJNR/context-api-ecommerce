import React from "react";

const Checkout = () => {
  return (
    <div className="container">
      <main>
        <div class="py-5 text-center">
          <img
            className="img-circle img-thumbnail"
            src="http://abbrefy.xyz/76bb2f3"
            style={{ width: "200px" }}
            alt="User"
          />
          <h2>Checkout form</h2>
          <p class="lead">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="row g-5">
  <div className="col-md-5 col-lg-4 order-md-last">
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-primary">Your cart</span>
      <span className="badge bg-primary rounded-pill">3</span>
    </h4>
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">Product name</h6>
          <small className="text-body-secondary">Brief description</small>
        </div>
        <span className="text-body-secondary">$12</span>
      </li>
      {/* Other list items */}
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>$20</strong>
      </li>
    </ul>

    <form className="card p-2">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Promo code" />
        <button type="submit" className="btn btn-secondary">Redeem</button>
      </div>
    </form>
  </div>
  <div className="col-md-7 col-lg-8">
  <h4 className="mb-3">Billing address</h4>
  <form className="needs-validation" noValidate>
    <div className="row g-3">
      <div className="col-sm-6">
        <label htmlFor="firstName" className="form-label">First name</label>
        <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
        <div className="invalid-feedback">
          Valid first name is required.
        </div>
      </div>

      <div className="col-sm-6">
        <label htmlFor="lastName" className="form-label">Last name</label>
        <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
        <div className="invalid-feedback">
          Valid last name is required.
        </div>
      </div>

      <div className="col-12">
        <label htmlFor="username" className="form-label">Username</label>
        <div className="input-group has-validation">
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" id="username" placeholder="Username" required />
          <div className="invalid-feedback">
            Your username is required.
          </div>
        </div>
      </div>

      {/* Other form fields */}
    </div>

    <hr className="my-4" />

    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="same-address" />
      <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
    </div>

    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="save-info" />
      <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
    </div>

    <hr className="my-4" />

    <h4 className="mb-3">Payment</h4>

    <div className="my-3">
      {/* Payment method radio buttons */}
    </div>

    <div className="row gy-3">
      {/* Credit card details */}
    </div>

    <hr className="my-4" />

    <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
  </form>
</div>

</div>

      </main>
    </div>
  );
};

export default Checkout;
