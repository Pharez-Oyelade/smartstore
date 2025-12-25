import { prisma } from "../config/db.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
import { setTokenCookie } from "../utils/setTokenCookie.js";

import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Generate token
  const token = generateToken(newUser.id);

  // Set token cookie
  setTokenCookie(res, token);

  res.status(201).json({
    status: "success",
    data: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check if user exists
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Generate token
  const token = generateToken(user.id);

  // Set token cookie
  setTokenCookie(res, token);

  res.status(201).json({
    status: "success",
    data: {
      id: user.id,
      email: user.email,
    },
    token,
  });
};

const logoutUser = (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res
    .status(200)
    .json({ status: "success", message: "Logged out successfully" });
};

// fetch current user
const getMe = async (req, res) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch {
    return res.status(401).json({ error: "Not authenticated" });
  }
};

export { registerUser, loginUser, logoutUser, getMe };
