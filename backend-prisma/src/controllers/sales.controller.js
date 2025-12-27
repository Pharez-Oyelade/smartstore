import { prisma } from "../config/db.js";

const createSale = async (req, res) => {
  try {
    const {items, paymentMethod} = req.body;

    if (!items || items.length === 0 ) {
      return res.status(400).json({
        message: "Sale items are required"
      })
    }

    if (!paymentMethod) {
      return res.status(400).json({
        message: "Payment method is required"
      })
    }

    // fetch products
    const products = await prisma.product.findMany({
      where:{
        id: {
          in: items.map((item) => item.productId)
        }
      }
    });

    if (products.length !== items.length) {
      return res.status(400).json({
        message: "One or more items do not exist"
      })
    }

    let totalAmount = 0;

    const saleItemsData = items.map((item) => {
      const product = products.find(p => p.id === item.productId)

      if (!product) {
        throw new Error("Product missing")
      }

      if (product.stock < item.quantity) {
        throw new Error(`${product.name} stock is insufficient`)
      }

      const lineTotal = product.price * item.quantity;
      totalAmount += lineTotal;

      return {
        productId: product.id,
        quantity: item.quantity,
        unitPrice: product.price,
      }
    })

    const sale = await prisma.$transaction(async (tx) => {
      const newSale = await tx.sale.create({
        data: {
          totalAmount,
          paymentMethod,
          createdBy: req.user.id,
          items: {
            create: saleItemsData
          },
        },
        include: {
          items: true
        }
      });

      // Deduct stock
      for (const item of saleItemsData) {
        await tx.product.update({
          where: {id: item.productId},
          data: {
            stock: {
              decrement: item.quantity
            }
          }
        })
      }

      return newSale
    });

    return res.status(201).json({
      message: "Sale created successfully",
      sale
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: "Failed to create sale"
    })
  }
}

export { createSale };
