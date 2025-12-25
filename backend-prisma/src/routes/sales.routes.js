import express from "express";
import { createSale } from "../controllers/sales.controller.js";

const salesRouter = express.Router();

// create sale, get sales, get sale by id, update sale

salesRouter.post("/create", createSale);

export default salesRouter;
