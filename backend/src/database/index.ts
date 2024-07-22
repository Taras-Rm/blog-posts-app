import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const cleanDb = () => {
  return prisma.$transaction([prisma.post.deleteMany()]);
};

export default prisma;
