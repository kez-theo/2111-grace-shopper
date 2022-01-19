import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCart } from "../store/cart";

//this thunk should include the active carts total price
//import all thunks needed here

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return <div>
    <h1>Thank you for shopping with BookShopper!</h1>
    <h2>Your order:</h2>
    {cart.books.map((book) => {
      <div>
    })}
  </div>;
};

export default Checkout;
