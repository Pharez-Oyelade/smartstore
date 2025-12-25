import { PrismaClient } from "../../app/generated/prisma/client.js";
import { ENV } from "../config/env.js";

// Use a global singleton to avoid creating multiple PrismaClient instances
// which can cause EventEmitter MaxListeners warnings in long-running apps
// const prisma = globalThis.__prisma_client ?? new PrismaClient({
//   log: ENV.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error']
// });
// if (!globalThis.__prisma_client) globalThis.__prisma_client = prisma;

// const connectDB = async () => {
//   try {
//     await prisma.$connect();
//     console.log("DB connected via Prisma");
//   } catch (error) {
//     console.error(`Error connecting to DB: ${error.message}`);
//     process.exit(1);
//   }
// }

// const disconnectDB = async () => {
//   await prisma.$disconnect();
// }

// export { prisma, connectDB, disconnectDB };

import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB connected via Prisma");
  } catch (error) {
    console.error(`Error connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await prisma.$disconnect();
};

export { prisma, connectDB, disconnectDB };
