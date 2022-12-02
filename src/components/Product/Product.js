import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../features/counter/counterSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { id, name, seller, price, ratings, img } = product;
  return (
    <div>
      <div className="card card-compact w-96 bg-teal-100 shadow-xl">
        <figure>
          <img src={img} alt="card_images" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg">
            Price:{" "}
            <span className="text-orange-700 font-semibold">${price}</span>
          </p>
          <p>Seller: {seller}</p>
          <p>Ratings: {ratings} stars</p>
          <div className="mt-3">
            <button
              onClick={() => dispatch(AddToCart(id))}
              className="btn btn-accent hover:bg-orange-200 w-full"
            >
              <span className="pr-4">Add to Cart</span> <BsFillCartFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
