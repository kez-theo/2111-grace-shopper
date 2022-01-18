import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//NEED to create thunks to hit the database and send this data to

//For best practice do we use
const AddressInfo = () => {
  const [firstName, setFirstName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = () => {
    e.preventDefault();
    dispatch(updateCart({}));
  };
  return (
    <div>
      <form name="userData" onSubmit={submitHandler}>
        <h2>Billing Address</h2>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="billingFirstName" type="text" />
        </div>

        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="billingLastName" type="text" />
        </div>

        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="billingEmail" type="email" />
        </div>

        <div>
          <label htmlFor="streetAddress">
            <small>Street</small>
          </label>
          <input name="billingStreetAddress" type="streetAddress" />
        </div>

        <div>
          <label htmlFor="cityAddress">
            <small>City</small>
          </label>
          <input name="billingCityAddress" type="cityAddress" />
        </div>

        <div>
          <label htmlFor="zipcode">
            <small>Zipcode</small>
          </label>
          <input name="billingZipcode" type="zipcode" />
        </div>

        <h2>Shipping Address</h2>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="shippingFirstName" type="text" />
        </div>

        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="shippingLastName" type="text" />
        </div>

        <div>
          <label htmlFor="streetAddress">
            <small>Street</small>
          </label>
          <input name="shippingStreetAddress" type="streetAddress" />
        </div>

        <div>
          <label htmlFor="cityAddress">
            <small>City</small>
          </label>
          <input name="shippingCityAddress" type="cityAddress" />
        </div>

        <div>
          <label htmlFor="zipcode">
            <small>Zipcode</small>
          </label>
          <input name="shippingZipcode" type="zipcode" />
        </div>

        <div>
          <input type="submit" value="Save & Continue" />
        </div>
      </form>
    </div>
  );
};

export default AddressInfo;
