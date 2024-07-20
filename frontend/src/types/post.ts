export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export type CreatePost = Omit<Post, "id" | "createdAt">;

export type EditPost = CreatePost;
