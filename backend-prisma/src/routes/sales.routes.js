import express from "express";
import { createSale, getSales } from "../controllers/sales.controller.js";
import { authUser } from "../middleware/auth.middleware.js";
import { makePayment } from "../controllers/payment.controller.js";

const salesRouter = express.Router();

// create sale, get sales, get sale by id, update sale

salesRouter.post("/create", authUser, createSale);
salesRouter.get("/get", authUser, getSales);

salesRouter.post("/:saleId/pay", authUser, makePayment);

export default salesRouter;
