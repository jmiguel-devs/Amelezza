import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const OpenCart = () => {
  const dispatch = useDispatch();
  console.log("first");
  useCallback(() => dispatch({ type: "@cart/toggleCart" }), []);
};

export default OpenCart;
