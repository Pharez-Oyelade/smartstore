import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/products.controller.js";

const productRouter = express.Router();

productRouter.get("/get", getProducts);
productRouter.post("/create", createProduct);

export default productRouter;
