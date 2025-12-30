import { prisma } from "../config/db.js";

// const createPayment = async (req, res) => {
//     try {
//         const {saleId, amount, paymentMethod} = req.body;

//         if (!saleId) {
//             return res.status(400).json({
//                 message: "Sale ID is required"
//             })
//         }

//         if (!amount) {
//             return res.status(400).json({
//                 message: "Amount is required"
//             })
//         }

//         if (!paymentMethod) {
//             return res.status(400).json({
//                 message: "Payment method is required"
//             })
//         }

//         const sale = await prisma.sale.findUnique({
//             where: {
//                 id: saleId
//             }
//         });

//         if (!sale) {
//             return res.status(404).json({
//                 message: "Sale not found"
//             })
//         }

//         const payment = await prisma.payment.create({
//             data: {
//                 saleId,
//                 amount,
//                 paymentMethod,
//                 status: "pending"
//             }
//         });

//         return res.status(201).json({
//             message: "Payment created successfully",
//             payment
//         })
//     } catch (error) {
//         console.error(error)
//         return res.status(500).json({
//             message: "Failed to create payment"
//         })
//     }
// }



const makePayment = async (req, res) => {
  const { saleId } = req.params;
  const { paymentMethod } = req.body;

  try {
    const sale = await prisma.sale.findUnique({
      where: { id: saleId },
    });

    if (!sale) {
      return res.status(404).json({ message: "Sale not found" });
    }

    if (sale.paymentStatus === "COMPLETED") {
      return res.status(400).json({ message: "Sale already paid" });
    }

    // Upsert payment: if exists, update provider; if not, create new.
    // Ensure we have a pending payment record before finalizing.
    const payment = await prisma.payment.upsert({
      where: {
        saleId: saleId,
      },
      update: {
        provider: paymentMethod,
        status: "PENDING",
      },
      create: {
        saleId,
        reference: crypto.randomUUID(),
        provider: paymentMethod,
        status: "PENDING",
      },
    });

    // Manual payment → instant confirmation
    await prisma.$transaction([
      prisma.payment.update({
        where: { id: payment.id },
        data: { status: "COMPLETED" },
      }),
      prisma.sale.update({
        where: { id: saleId },
        data: { paymentStatus: "COMPLETED" },
      }),
    ]);

    return res.status(200).json({
      message: "Payment successful",
      payment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Payment failed",
    });
  }
};

export { makePayment };