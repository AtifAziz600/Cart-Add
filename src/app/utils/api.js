// pages/api/products.js

const products = [
  [
    {
      id: 1,
      name: "Mac Book Air",
      price: 999,
      image: "/macbookair.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Shoes",
      price: 99,
      image: "/shoe.webp",
      quantity: 1,
    },
    {
      id: 3,
      name: "Football",
      price: 299,
      image: "/football.webp",
      quantity: 1,
    },
    {
      id: 4,
      name: "Iphone 14 pro",
      price: 799,
      image: "/iphone-14-pro.jfif",
      quantity: 1,
    },
  ],
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    res.status(200).json(products);
  } else if (req.method === "POST") {
    // Handle POST request
    const newProduct = req.body; // Assuming JSON request body
    products.push(newProduct);
    res.status(201).json(products);
  } else {
    // Handle other HTTP methods
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// import axios from "axios";

// const API_KEY = "ed3fcd7d26mshc37bdd7c1db6785p1e4674jsn76d6955181bc";
// const BASE_URL = "http://rapidapi.com/products";

// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/products`, {
//       headers: {
//         "x-rapidapi-key": API_KEY,
//         "x-rapidapi-host":
//           "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return null;
//   }
// };

// export default fetchProducts;
