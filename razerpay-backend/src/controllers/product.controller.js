import productModel from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const { image, title, desc, price } = req.body;


    const products = await productModel.create({
      image,
      title,
      desc,
      price,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getItems = async (req, res) => {
  try {
    const products = await productModel.findOne();

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get items govardhan",
      error: error.message,
    });
  }
};
