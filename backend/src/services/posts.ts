import prisma from "../database";
import { CreatePostModel } from "../types/models";

const getAll = async () => {
  return await prisma.post.findMany();
};

const getById = async (id: number) => {
  return await prisma.post.findUnique({ where: { id } });
};

const create = async (post: CreatePostModel) => {
  return await prisma.post.create({
    data: {
      ...post,
    },
  });
};

const updateById = async (id: number, post: CreatePostModel) => {
  const existingPost = await prisma.post.findUnique({
    where: { id },
  });

  if (!existingPost) {
    throw new Error(`can not find post with id: ${id}`);
  }

  return await prisma.post.update({
    where: { id },
    data: {
      ...post,
    },
  });
};

const deleteById = async (id: number) => {
  const existingPost = await prisma.post.findUnique({
    where: { id },
  });

  if (!existingPost) {
    throw new Error(`can not find post with id: ${id}`);
  }

  await prisma.post.delete({ where: { id } });

  return id;
};

export const postsService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
