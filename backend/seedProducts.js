require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Apple iPhone 15",
    description: "Latest Apple smartphone",
    price: 79999,
    image: "https://via.placeholder.com/300",
    category: "Mobiles",
    stock: 15,
  },
  {
    name: "Samsung Galaxy S24",
    description: "Premium Android phone",
    price: 69999,
    image: "https://via.placeholder.com/300",
    category: "Mobiles",
    stock: 20,
  },
  {
    name: "Sony WH-1000XM5",
    description: "Wireless Noise Cancelling Headphones",
    price: 24999,
    image: "https://via.placeholder.com/300",
    category: "Audio",
    stock: 10,
  },
  {
    name: "MacBook Air M3",
    description: "Apple Laptop",
    price: 114999,
    image: "https://via.placeholder.com/300",
    category: "Laptops",
    stock: 5,
  },
  {
    name: "Logitech MX Master 3S",
    description: "Wireless Mouse",
    price: 8999,
    image: "https://via.placeholder.com/300",
    category: "Accessories",
    stock: 30,
  }
];

async function seed() {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ Products Added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seed();