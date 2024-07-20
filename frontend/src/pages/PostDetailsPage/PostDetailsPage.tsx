import { useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import { Post } from "../../types/post";

const defPost = {
  id: 4,
  title: "Second shorter post",
  content:
    "Lorem ipsum dolor sit amet consect harum eligendi! Quod voluptates sint voluptatum ab velit enim, animi consequuntur perferendis earum.",
  author: "Ira Rom",
  createdAt: "21.05.2002",
};

function PostDetailsPage() {
  const [post, _] = useState<Post>(defPost);

  // fetch post by id
  return (
    <PageWrapper>
      <div>
        <div className="flex justify-between items-end mb-3">
          <h2 className="text-3xl">{post.title}</h2>
          <div className="text-slate-500">
            Created: <span>{post.createdAt}</span>
          </div>
        </div>
        <div className="mb-6 border-b border-primary w-fit">
          Author: <span>{post.author}</span>
        </div>

        <p>{post.content}</p>
      </div>
    </PageWrapper>
  );
}

export default PostDetailsPage;
