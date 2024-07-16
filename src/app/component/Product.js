"use client";
import React, { useEffect } from "react";
import { cartState } from "../../../atoms/cartState";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItem(storedCart);
  }, [setCartItem]);

  const updateLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const addItemsToCart = () => {
    let updatedCart;
    if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
      updatedCart = [...cartItem, product];
    } else {
      updatedCart = cartItem.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    }
    setCartItem(updatedCart);
    updateLocalStorage(updatedCart);
    toast(`${product.name} added to cart`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="w-full h-56 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <div className="flex items-center justify-between text-lg font-semibold text-gray-800">
          <h1>{product.name}</h1>
          <h3>{product.price} TK</h3>
        </div>
        <button
          className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
          onClick={addItemsToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
