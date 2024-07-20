import { CreatePost, EditPost, Post } from "../types/post";
import api from "./api";

const getAllPosts = async () => {
  const response = await api.get<Post[]>("/posts");
  return response.data;
};

const getPost = async (id: number) => {
  const response = await api.get<Post>(`/posts/${id}`);
  return response.data;
};

const createPost = async (data: CreatePost) => {
  const response = await api.post<Post>("/posts", { data: { ...data } });
  return response.data;
};

const updatePost = async (id: number, data: EditPost) => {
  const response = await api.put<Post>(`/posts/${id}`, { data: { ...data } });
  return response.data;
};

const deletePost = async (id: number) => {
  const response = await api.delete<{ message: string }>(`/posts/${id}`);
  return response.data;
};

export { createPost, deletePost, getAllPosts, getPost, updatePost };
