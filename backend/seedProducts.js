require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  // Mobiles
  {
    name: "Apple iPhone 15",
    description: "Latest Apple smartphone with A16 Bionic chip.",
    price: 79999,
    image: "iphone15.jpg",
    category: "Mobiles",
    stock: 15,
  },
  {
    name: "Samsung Galaxy S24",
    description: "Premium Android smartphone with AI features.",
    price: 69999,
    image: "galaxy-s24.jpg",
    category: "Mobiles",
    stock: 18,
  },
  {
    name: "Google Pixel 9",
    description: "Google flagship phone with advanced AI camera.",
    price: 74999,
    image: "pixel9.jpg",
    category: "Mobiles",
    stock: 12,
  },
  {
    name: "OnePlus 12",
    description: "High-performance flagship with Snapdragon processor.",
    price: 64999,
    image: "oneplus12.jpg",
    category: "Mobiles",
    stock: 20,
  },

  // Laptops
  {
    name: "MacBook Air M3",
    description: "Apple laptop powered by the M3 chip.",
    price: 114999,
    image: "macbook-air-m3.jpg",
    category: "Laptops",
    stock: 8,
  },
  {
    name: "Dell XPS 13",
    description: "Premium ultrabook with InfinityEdge display.",
    price: 99999,
    image: "dell-xps13.jpg",
    category: "Laptops",
    stock: 10,
  },
  {
    name: "ASUS ROG Strix G16",
    description: "Gaming laptop with RTX graphics.",
    price: 139999,
    image: "asus-rog.jpg",
    category: "Laptops",
    stock: 6,
  },

  // Audio
  {
    name: "Sony WH-1000XM5",
    description: "Wireless noise cancelling headphones.",
    price: 24999,
    image: "sony-xm5.jpg",
    category: "Audio",
    stock: 15,
  },
  {
    name: "Apple AirPods Pro",
    description: "Premium wireless earbuds with ANC.",
    price: 24999,
    image: "airpods-pro.jpg",
    category: "Audio",
    stock: 20,
  },
  {
    name: "JBL Flip 6",
    description: "Portable Bluetooth speaker with powerful bass.",
    price: 11999,
    image: "jbl-flip6.jpg",
    category: "Audio",
    stock: 22,
  },

  // Smart Watches
  {
    name: "Apple Watch Series 9",
    description: "Advanced smartwatch with health tracking.",
    price: 42999,
    image: "apple-watch.jpg",
    category: "Smart Watches",
    stock: 14,
  },
  {
    name: "Samsung Galaxy Watch 7",
    description: "Smartwatch with fitness and health features.",
    price: 31999,
    image: "galaxy-watch7.jpg",
    category: "Smart Watches",
    stock: 16,
  },

  // Accessories
  {
    name: "Logitech MX Master 3S",
    description: "Ergonomic wireless productivity mouse.",
    price: 8999,
    image: "mx-master3s.jpg",
    category: "Accessories",
    stock: 25,
  },
  {
    name: "Keychron K2",
    description: "Wireless mechanical keyboard for professionals.",
    price: 7999,
    image: "keychron-k2.jpg",
    category: "Accessories",
    stock: 18,
  },
  {
    name: "Razer DeathAdder V3",
    description: "High-performance gaming mouse.",
    price: 6999,
    image: "deathadder-v3.jpg",
    category: "Accessories",
    stock: 20,
  },
];

async function seed() {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ 15 Products Added Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seed();