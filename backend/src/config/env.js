import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  DATABASE_URI: process.env.DATABASE_URI,
  PAYSTACK_SECRET: process.env.PAYSTACK_SECRET,
}