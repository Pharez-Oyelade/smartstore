import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct
} from "../controllers/products.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const productRouter = express.Router();

productRouter.get("/get", authUser, getProducts);
productRouter.post("/create", authUser, createProduct);
productRouter.post("/delete/:id", authUser, deleteProduct);
productRouter.post("/update/:id", authUser, updateProduct);

export default productRouter;
