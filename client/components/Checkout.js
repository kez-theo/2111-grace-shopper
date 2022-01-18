import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddressInfo from "./AddressInfo";
import Shipping from "./Shipping";
import Payment from "./Payment";

//this thunk should include the active carts total price
import fetchActiveCart from "../store/cart";
//import all thunks needed here

const Checkout = () => {
  const dispatch = useDispatch();

  // if I understand this correctly the selector function
  // will return an object with a property, `activeCart`
  // but we are attempting to destructure the value `cart`
  // from that object.
  const { cart } = useSelector((state) => {
    return {
      //rename state.cart depending on what others call cart and singleUser reducer
      activeCart: state.activeCart,
    };

    // this is unreachable code
    useEffect(() => {
      dispatch(fetchActiveCart());
    }, [cart]);
  });

  // no longer used?
  const CurrentCart = { id: 1, item_quantity: 5, total: 25 };

  return (
    <div>
      <div>
        <span>1. ADDRESS</span>
        <span>2. DELIVERY</span>
        <span>3. PAYMENT</span>
        <span>4. CONFIRM</span>
      </div>
      <div>
        {/* if cart doesn't have an address set, show the User Data Form, if it does, show delivery, if it has a shipping address, show payment, if it has payment info, show confirm, if it's switched to ordered, show thank you page */}
        <AddressInfo />
        <Shipping />
        <Payment />
        {/* <Confirm /> */}
      </div>
    </div>
  );
};

export default Checkout;
