import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    desc: String,
    price: {
      amount: {
        type: Number,
        min: 0,
      },
      currency: {
        type: String,
        default: "INR",
        enum: ["INR", "USD"],
      },
    },
  
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
