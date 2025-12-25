import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { pool } from "../../src/config/db"
import { ENV } from "../../src/config/env"

export async function registerUser({name, email, password}) {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, role, created_at
      `,
      [name, email, hashedPassword]
    );
    return result.rows[0];
  } catch (error) {
    if (error.code === '23505') {
      throw new Error("Email already exists")
    }
  }
}

export async function loginUser({email, password}) {
  // find user by email
  const result = await pool.query(
    "SELECT * FROM users where email = $1",
    [email]
  );

  const user = result.rows[0];
  if(!user) {
    throw new Error("User not found");
  }

  // verify password
  const isValidPassword = await bcrypt.compare(password, user.password)
  if(!isValidPassword){
    throw new Error("Incorrect credentials")
  }

  // Generate JWT Token
  const token = jwt.sign(
    {id: user.id, email: user.email, role: user.role}, ENV.JWT_SECRET, {expiresIn: "7d"}
  );

  // Return token and user (without password)
  const { password: _, ...userWithoutPassword} = user;

  return {
    token,
    user: userWithoutPassword
  }
}