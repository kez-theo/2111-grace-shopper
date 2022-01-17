import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserDataForm from "./UserDataForm";
//this thunk should include the active carts total price
import fetchActiveCart from "../store/cart";
//import all thunks needed here

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => {
    return {
      //rename state.cart depending on what others call cart and singleUser reducer
      activeCart: state.activeCart,
    };

    useEffect(() => {
      dispatch(fetchActiveCart());
    }, [cart]);
  });

  return (
    <div>
      <UserDataForm />
    </div>
  );
};

export default Checkout;
