import prisma from "../database";
import { CreatePostModel } from "../types/models";
import { ApiError } from "../utils/apiError";
import { httpStatus } from "../utils/httpStatus";

const getAll = async () => {
  return await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
};

const getById = async (id: number) => {
  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `can not find post with id: ${id}`
    );
  }

  return post;
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
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `can not find post with id: ${id}`
    );
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
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `can not find post with id: ${id}`
    );
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
