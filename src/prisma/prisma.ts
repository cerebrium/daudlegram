import { PrismaClient } from "@prisma/client";

// Global Prisma instance for development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create Prisma client
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// Prevent multiple instances in development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
