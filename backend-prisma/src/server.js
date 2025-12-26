import express from "express";
import { ENV } from "../src/config/env.js";
import { connectDB, disconnectDB } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// import Routes
import authRouter from "./routes/auth.routes.js";
import salesRouter from "./routes/sales.routes.js";
import productRouter from "./routes/products.routes.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const PORT = ENV.PORT;

app.get("/health", (req, res) => {
  res.json({ message: "Server is healthy" });
});

// Routes
app.use("/auth", authRouter);
app.use("/sales", salesRouter);
app.use("/products", productRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Handle unhandled promise rejections (eg database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions (eg invalid code)
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
