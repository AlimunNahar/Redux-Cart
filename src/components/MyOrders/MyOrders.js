import React from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { carts } = useSelector((state) => state.products);
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold mt-8">Shopping List</h2>
      <div className="flex h-[580px] justify-between">
        <div className="overflow-x-auto mx-auto my-12">
          {carts.length ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Images</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart, idx) => (
                    <tr key={idx}>
                      <th>
                        <div className="avatar">
                          <div className="w-24 rounded-xl">
                            <img src={cart.img} alt="cart_images" />
                          </div>
                        </div>
                      </th>
                      <td>{cart.name}</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                      <td className="text-xl text-red-500">
                        <AiOutlineDelete />
                      </td>
                    </tr>
                  ))}
                  ;
                </tbody>
              </table>
            </div>
          ) : (
            <p className=" text-center text-xl font-bold ">
              No Items for Review. Please <Link to="/">Shop More</Link>
            </p>
          )}
        </div>
        <div className="">{carts.length ? <Cart /> : <></>}</div>
      </div>
    </div>
  );
};

export default MyOrders;
