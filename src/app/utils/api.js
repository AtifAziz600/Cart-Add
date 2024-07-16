

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
       res.status(200).json(products);
  } else if (req.method === "POST") {
    
    const newProduct = req.body; 
    products.push(newProduct);
    res.status(201).json(products);
  } else {
    
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


