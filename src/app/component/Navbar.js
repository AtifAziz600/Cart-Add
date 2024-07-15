import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { cartState } from "../../../atoms/cartState";
import { useRecoilState } from "recoil";

const Navbar = () => {
  const [cartItem] = useRecoilState(cartState);
  return (
    <section className="shadow-lg bg-white sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Logo</Link>
        </div>

        <div className="relative cursor-pointer flex items-center">
          <Link href="/cart">
            <div className="relative">
              <FiShoppingCart className="text-3xl text-gray-800" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 h-5 w-5 rounded-full flex items-center justify-center text-white font-bold">
                {cartItem.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
