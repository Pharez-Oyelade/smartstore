import { prisma } from "../config/db.js";

// create a new product
const createProduct = async (req, res) => {
  const { name, description, price, cost, stock, category } = req.body;
  const userId = req.user.id; // get user id from auth middleware

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        cost,
        stock,
        category,
        createdBy: userId,
      },
    });
    res.status(201).json({
      status: "success",
      data: {
        id: newProduct.id,
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        cost: newProduct.cost,
        stock: newProduct.stock,
        category: newProduct.category,
        createdBy: newProduct.createdBy,
      },
    });
  } catch (error) {
    console.error("createProduct error:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

// get all products for a user
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        createdBy: req.user.id,
      },
    });
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
const updateProduct = async (req, res) => {
  try {
    const userId = req.user.id;
  const productId = req.params.id;

  const {name, description, price, cost, stockAdjustment, category} = req.body;

  const product = await prisma.product.findFirst({
    where: {
      id: productId,
      createdBy: userId,
    }
  })

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // build payload
  const updateData = {};

  if (name !== undefined) {
    updateData.name = name;
  }

  if (description !== undefined) {
    updateData.description = description;
  }

  if (price !== undefined) {
    updateData.price = price;
  }

  if (cost !== undefined) {
    updateData.cost = cost;
  }

  if (category !== undefined) {
    updateData.category = category;
  }

  // stock handled safely
  if (stockAdjustment !== undefined) {
    const newStock = product.stock + Number(stockAdjustment);
   
    if (newStock < 0) {
      return res.status(400).json({ error: "Stock cannot be negative" });
    }

    updateData.stock = newStock;
  }

  // update product
  const updatedProduct = await prisma.product.update({
    where: {
      id: productId,
    },
    data: updateData,
  })

  return res.status(200).json({
    status: "success",
    data: updatedProduct,
  })
  } catch (error) {
    console.error("updateProduct error:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
}

// delete product by id
const deleteProduct = async (req, res) => {
  const {id} = req.params;

  try {
    const deleted = await prisma.product.delete({
      where: {
        id: id,
        createdBy: req.user.id,
      }
    })

    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      status: "success",
      data: deleted,
    });
  } catch (error) {
    console.error("deleteProduct error:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

export { createProduct, getProducts, updateProduct, deleteProduct };
