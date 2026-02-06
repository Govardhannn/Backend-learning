import express from "express"

const router = express.Router();
import{ createProduct, getItems} from "../controllers/product.controller.js";

router.post('/',createProduct )
router.get('/',getItems )

export default router;