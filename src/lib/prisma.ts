import { PrismaClient } from "@/generated/prisma/client";
import { config } from "dotenv";

// Load environment variables from .env file
config();

// Simple Prisma client instance for development and production
export const prisma = new PrismaClient({ log: ['query'] });