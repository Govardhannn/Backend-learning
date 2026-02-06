import productModel from "../models/product.model.js";
import Razorpay from "Razorpay";

const Razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


