import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import all thunks needed here

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => {
    return {
      //rename state.cart depending on what others call cart and singleUser reducer
      cart: state.cart,
      user: state.user,
    };
  });
};
