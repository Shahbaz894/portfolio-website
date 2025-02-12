import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

if (typeof window !== "undefined") {
  throw new Error("PrismaClient should not be used in the browser ok.");
}

// Configure Neon WebSockets
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL as string;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Prevent multiple instances of Prisma in dev mode
const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter } );

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
