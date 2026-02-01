const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    originalPrice: {
      type: Number
    },

    discountPercent: {
      type: Number
    },

    rating: {
      type: Number,
      default: 4.5
    },

    image: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true,
      enum: ["mobile", "watch", "audio", "laptop", "electronics"]
    },

    description: {
      type: String
    },

    specs: {
      type: Object
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);