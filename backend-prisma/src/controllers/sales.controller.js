import { prisma } from "../config/db.js";

const createSale = async (req, res) => {
  const { totalAmount, paymentMethod, createdBy } = req.body;

  try {
    const newSale = await prisma.sale.create({
      data: {
        totalAmount,
        paymentMethod,
        createdBy,
      },
    });
    res.status(201).json({
      status: "success",
      data: {
        id: newSale.id,
        totalAmount: newSale.totalAmount,
        paymentMethod: newSale.paymentMethod,
        createdBy: newSale.createdBy,
      },
    });
  } catch (error) {
    console.error("createSale error:", error); // <-- add this line
    res.status(500).json({ error: "Failed to create sale" });
  }
};

export { createSale };
