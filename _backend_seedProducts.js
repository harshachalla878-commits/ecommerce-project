require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");
const connectDB = require("./config/db");

const products = [
  // 👉 WE WILL PASTE YOUR PRODUCTS HERE
];

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany(); // clear old data
    await Product.insertMany(products);

    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

seedProducts();