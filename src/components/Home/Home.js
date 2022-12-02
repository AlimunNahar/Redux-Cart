import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/counter/counterSlice";

const Home = () => {
  // const products = useLoaderData();
  // console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const { products, loading } = useSelector((state) => state.products);
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading && (
          <div className="mx-auto my-20 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        )}
        {products
          ? products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : "No Products to display"}
      </div>
      <div className="hidden lg:block">
        <Cart />
        <Link to="/orders">
          <button className="btn btn-accent my-8">Review Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
