import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">Thank You!</h1>
        <p className="text-2xl mb-8">
          Your Order Has Been Placed Successfully.
        </p>

        <Link href="/">
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
