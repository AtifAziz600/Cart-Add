import React from "react";

const CartList = ({
  data,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) => {
  const { name, image, quantity, price } = data;

  return (
    <div className="bg-white shadow-md rounded-lg max-w-3xl mx-auto mt-6 p-6 flex items-center justify-between transition duration-300 hover:shadow-lg">
      <img
        className="h-24 w-24 object-cover rounded-lg"
        src={image}
        alt={name}
      />

      <div className="flex-1 ml-6">
        <div className="font-bold text-xl text-gray-800">{name}</div>
        <div className="text-gray-600 mt-1">Quantity: {quantity}</div>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={onDecreaseQuantity}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition duration-300"
          >
            -
          </button>
          <button
            onClick={onIncreaseQuantity}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition duration-300"
          >
            +
          </button>
        </div>
      </div>

      <div className="text-2xl font-bold text-gray-800">
        {price * quantity} TK
      </div>
      <button
        onClick={onRemoveItem}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Remove
      </button>
    </div>
  );
};

export default CartList;
