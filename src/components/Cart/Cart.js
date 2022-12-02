import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.products);
  // console.log(carts);
  let subTotal = 0;
  let shipping = 0;
  for (let value of carts) {
    const perItemPrice = value.price * value.quantity;
    subTotal += perItemPrice;
    shipping += value.shipping;
  }
  const tax = parseFloat((subTotal * 0.1).toFixed(2));
  const grandTotal = subTotal + shipping + tax;
  // console.log(subTotal);
  return (
    <div className="top-0 sticky py-5 pl-5 lg:pr-10 bg-green-100">
      <h4 className="text-3xl font-bold text-accent pb-5">Order Summary</h4>
      <div className="leading-9">
        <p>Selected Items: {carts.length}</p>
        <p>
          Subtotal: $ <span className="text-orange-500">{subTotal}</span>
        </p>
        <p>Total Shipping: $ {shipping}</p>
        <p>Tax: $ {tax}</p>
        {/* <h5>Grand Total: {grandTotal.toFixed(2)}</h5> */}
      </div>
      <div className="divider text-red-700">Grand Total: $ {grandTotal}</div>
    </div>
  );
};

export default Cart;
