import pkg from 'pg'
import { ENV } from './env.js';

const { Pool } = pkg;

// create a new pool instance to manage PostgreSQL connections
export const pool = new Pool({
  connectionString: ENV.DATABASE_URI,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
})