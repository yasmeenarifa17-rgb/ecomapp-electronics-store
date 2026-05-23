const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 65999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "High performance laptop for gaming and work",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Noise cancelling premium headphones",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Modern smartwatch with fitness tracking",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});