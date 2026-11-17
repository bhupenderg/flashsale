import express from "express";
import productRoutes from "./modules/products/product.routes.js"

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "flashsale-api",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/v1/products", productRoutes);

export default app;