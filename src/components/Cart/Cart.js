import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.products);
  // console.log(carts);
  return (
    <div className="top-0 sticky py-5 pl-5 lg:pr-10 bg-green-100">
      <h4 className="text-3xl font-bold text-accent pb-5">Order Summary</h4>
      <div className="leading-9">
        <p>Selected Items: {carts.length}</p>
        <p>Total price: ${}</p>
        <p>Total Shipping: ${}</p>
        <p>Tax: {}</p>
        {/* <h5>Grand Total: {grandTotal.toFixed(2)}</h5> */}
      </div>
    </div>
  );
};

export default Cart;
