import { NextFunction, Request, Response } from "express";
import { postsService } from "../services/posts";
import { CreatePostModel, UpdatePostModel } from "../types/models";
import {
  RequestWithBody,
  RequestWithParams,
  RequestWithParamsAndBody,
} from "../types/requests";
import { httpStatus } from "../utils/httpStatus";

const getPosts = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postsService.getAll();

    res.status(httpStatus.OK).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPost = async (
  req: RequestWithParams<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);

    const post = await postsService.getById(id);

    res.status(httpStatus.OK).json(post);
  } catch (error) {
    next(error);
  }
};

const createPost = async (
  req: RequestWithBody<CreatePostModel>,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const createdPost = await postsService.create(data);

    res.status(httpStatus.CREATED).json(createdPost);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (
  req: RequestWithParamsAndBody<{ id: string }, UpdatePostModel>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    const updatedPost = await postsService.updateById(id, data);

    res.status(httpStatus.OK).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (
  req: RequestWithParams<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);

    await postsService.deleteById(id);

    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
    next(error);
  }
};

export const postsController = {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
};
