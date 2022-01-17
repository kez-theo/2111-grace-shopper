import React from "react";
import { connect } from "react-redux";

//NEED to create thunks to hit the database and send this data to

//For best practice do we use
class AddressInfo extends React.Component {
  render() {
    return (
      <div>
        <form name="userData">
          <h2>Billing Address</h2>
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>

          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>

          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="email" />
          </div>

          <div>
            <label htmlFor="streetAddress">
              <small>Street</small>
            </label>
            <input name="streetAddress" type="streetAddress" />
          </div>

          <div>
            <label htmlFor="cityAddress">
              <small>City</small>
            </label>
            <input name="cityAddress" type="cityAddress" />
          </div>

          <div>
            <label htmlFor="zipcode">
              <small>Zipcode</small>
            </label>
            <input name="zipcode" type="zipcode" />
          </div>

          <h2>Shipping Address</h2>
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>

          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>

          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="email" />
          </div>

          <div>
            <label htmlFor="streetAddress">
              <small>Street</small>
            </label>
            <input name="streetAddress" type="streetAddress" />
          </div>

          <div>
            <label htmlFor="cityAddress">
              <small>City</small>
            </label>
            <input name="cityAddress" type="cityAddress" />
          </div>

          <div>
            <label htmlFor="zipcode">
              <small>Zipcode</small>
            </label>
            <input name="zipcode" type="zipcode" />
          </div>

          <div>
            <button type="submit">Save & Continue</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddressInfo;
