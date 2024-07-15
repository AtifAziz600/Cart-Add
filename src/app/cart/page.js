"use client";
import React from "react";
import Navbar from "../component/Navbar";
import { useRecoilState } from "recoil";
import { cartState } from "../../../atoms/cartState";
import CartList from "../component/CartList";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const router = useRouter();

  const handleIncreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

    const createCheckoutSession = () => {
      
      setTimeout(() => {
        setCartItems([]); 
        router.push("../success/"); 
      }, 2000); 
    };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        {cartItems.length <= 0 ? (
          <h1 className="text-center text-4xl mt-32">Your Cart Is Empty</h1>
        ) : (
          <div className="mt-6">
            {cartItems.map((item) => (
              <CartList
                key={item.id}
                data={item}
                onIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
                onDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
                onRemoveItem={() => handleRemoveItem(item.id)}
              />
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="flex justify-end items-center mt-6">
            <div className="text-2xl font-bold">Total: TK {totalPrice()}</div>
          </div>
        )}
        <button
          className="block mx-auto mt-8 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md shadow-lg transition duration-300"
          onClick={createCheckoutSession}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
