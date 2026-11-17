import { getAllProducts } from "./product.service.js";

export const getProducts = (req, res) => {
  const products = getAllProducts();

  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
};