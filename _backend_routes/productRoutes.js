const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/* =====================================
   📦 GET ALL PRODUCTS
===================================== */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

/* =====================================
   🔍 GET PRODUCTS BY CATEGORY
   /api/products?category=mobile
===================================== */
router.get("/filter", async (req, res) => {
  try {
    const { category } = req.query;

    const products = category
      ? await Product.find({ category })
      : await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error filtering products" });
  }
});

/* =====================================
   ➕ ADD PRODUCT (ADMIN / SEEDING)
===================================== */
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;