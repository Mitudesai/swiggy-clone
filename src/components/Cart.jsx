import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
// import { clearCart } from "../store/slice/cartSlice";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <FoodItem key={index} item={item} />
              ))}
            </div>
            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
              <div className="text-lg text-green-600 font-semibold uppercase">
                Your Cart
              </div>
              <div className="text-4xl md:text-5xl text-green-600 font-bold uppercase mt-2">
                Summary
              </div>
              <p className="mt-5">
                <span className="text-gray-700 font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
              <div className="mt-[20%]">
                <p className="text-black font-semibold text-lg">
                  Total Amount: <span className="font-bold">₹{totalAmount / 100}</span>
                </p>
                <button className="w-full bg-green-600 py-3 mt-4 rounded-md text-white hover:bg-green-700 transition-all duration-200">
                  Check Out Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-16">
            <h1 className="text-gray-700 font-semibold text-xl p-4">
              Your Cart is Empty
            </h1>
            <Link to={"/"}>
              <button className="w-full bg-green-600 py-4 mt-2 rounded-md text-white hover:bg-green-700 transition-all duration-200">
                Start Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
