import dotenv from "dotenv";
import express from "express";
import cors from "cors"
const app = express();
dotenv.config();
import router from "./routes/product.route.js";
app.use(express.json())
app.use(cors())
app.use("/api/products", router);



export default app;
