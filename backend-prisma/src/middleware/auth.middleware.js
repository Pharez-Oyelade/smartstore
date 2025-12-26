import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

export const authUser = async (req, res, next) => {
  let token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await prisma.user.findUnique({
      where: {
        id: decoded.id
      },
      select: {
        id: true,
        email: true,
        role: true,
      }
    })

    if (!req.user) {
      return res.status(401).json({error: "User no longer exists"})
    }

    next(); //move to actual controller
  } catch (error) {
    console.error("Auth Middleware Error:", error)
    return res.status(401).json({error: "Unauthorized"})
  }
}