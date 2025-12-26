import { prisma } from "../config/db.js";

// create a new product
const createProduct = async (req, res) => {
  const { name, description, price, stock, createdBy } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
        createdBy,
      },
    });
    res.status(201).json({
      status: "success",
      data: {
        id: newProduct.id,
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        stock: newProduct.stock,
        createdBy: newProduct.createdBy,
      },
    });
  } catch (error) {
    console.error("createProduct error:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

// get all products
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({
      staus: "success",
      data: products,
    });
  } catch (error) {
    console.error("getProducts error:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
// get single product by id

// update product by id

// delete product by id

export { createProduct, getProducts };
