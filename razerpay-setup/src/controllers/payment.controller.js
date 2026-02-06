import Payment from "../models/paymen.model.js";
import productModel from "../models/product.model.js";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


export const createOrder = async (req, res) => {
 
  const product = await productModel.findOne();

  const options = {
    amount: product.price.amount, // amount in smallest currency unit
    currency: product.price.currency,
  };
  try {
    const order = await razorpay.orders.create(options);
    res.status(201).json(order)

    const newPayment = await Payment.create({
      orderId: order.id,
     price:{
      amount: order.amount,
      currency: order.currency
     },
      status: "PENDING"
    });

  } catch (error) {
    res.status(500).send('Error creating order');
  }
}