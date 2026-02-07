import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./routes/product.route.js";
import paymentRouter from "./routes/payment.route.js";


const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", router);
app.use('/api/payment', paymentRouter)

export default app;
