import express from "express";
import { createSale } from "../controllers/sales.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const salesRouter = express.Router();

// create sale, get sales, get sale by id, update sale

salesRouter.post("/create", authUser, createSale);

export default salesRouter;
