import { Edit, Trash2 } from "lucide-react";
import { generatePath, useNavigate } from "react-router-dom";
import { formatDate } from "../lib/date";
import { routes } from "../pages/routes";
import { Post } from "../types/post";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 border border-primary p-3 rounded-md shadow-md">
      <div className="flex flex-col col-span-11">
        <h3
          onClick={() =>
            navigate(generatePath(routes.postDetails, { id: post.id }))
          }
          className="text-xl font-semibold mb-2 hover:underline underline-offset-4 w-fit cursor-pointer"
        >
          {post.title}
        </h3>
        <p className="text-slate-500 mb-6">{post.content}</p>

        <div className="text-slate-500 flex justify-between">
          <div>{formatDate(post.createdAt)}</div>
          <div>
            Author: <span>{post.author}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-4 sm:flex-col sm:mt-0">
        <button
          onClick={() =>
            navigate(generatePath(routes.editPost, { id: post.id }))
          }
        >
          <Edit className="text-blue-500" />
        </button>
        <button>
          <Trash2 className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default PostCard;
