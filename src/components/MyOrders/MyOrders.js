import React from "react";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  DeleteCartItem,
  increment,
  decrement,
} from "../../features/counter/counterSlice";

const MyOrders = () => {
  const dispatch = useDispatch();
  // console.log(dispatch);
  const { carts } = useSelector((state) => state.products);
  // console.log(carts);
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold mt-8">Shopping List</h2>
      <div className="lg:flex h-[800px] justify-between">
        <div className="overflow-x-auto mx-auto my-12">
          {carts.length ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <td>Images</td>
                    <th>Item Name</th>
                    <th>Price($)</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart, idx) => (
                    <tr key={idx}>
                      <td>
                        <>
                          <div className="avatar">
                            <div className="w-24 rounded-xl">
                              <img src={cart.img} alt="cart_images" />
                            </div>
                          </div>
                        </>
                      </td>
                      <td>{cart.name}</td>
                      <td>{cart.price * cart.quantity}</td>
                      <td>
                        <>
                          <div className="flex text-lg">
                            <button
                              onClick={() => dispatch(decrement(cart.id))}
                            >
                              <AiOutlineMinusSquare />
                            </button>
                            <p className="mx-3">{cart.quantity}</p>
                            <button
                              onClick={() => dispatch(increment(cart.id))}
                              className=""
                            >
                              <AiOutlinePlusSquare />
                            </button>
                          </div>
                        </>
                      </td>
                      <td>
                        <button
                          onClick={() => dispatch(DeleteCartItem(cart.id))}
                          className="btn btn-circle btn-ghost text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  ;
                </tbody>
              </table>
            </div>
          ) : (
            <p className=" text-center text-xl font-bold ">
              No Items for Review. Please{" "}
              <Link
                to="/"
                className="text-orange-500 hover:underline underline-offset-8"
              >
                Shop More
              </Link>
            </p>
          )}
        </div>
        <div className="">{carts.length ? <Cart /> : <></>}</div>
      </div>
    </div>
  );
};

export default MyOrders;
