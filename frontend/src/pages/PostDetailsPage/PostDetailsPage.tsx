import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getPost } from "../../api/posts";
import PageWrapper from "../../components/PageWrapper";
import Loader from "../../components/ui/Loader";
import { formatDate } from "../../lib/date";
import { Post } from "../../types/post";

function PostDetailsPage() {
  const params = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetPost = async () => {
    try {
      setIsLoading(true);
      const data = await getPost(Number(params.id));
      setPost(data);
    } catch (error) {
      toast.error("Failed to get post!");
      console.log("api error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <PageWrapper>
      {isLoading ? (
        <div className="flex justify-center pt-10">
          <Loader />
        </div>
      ) : post ? (
        <div>
          <div className="flex justify-between items-end mb-3">
            <h2 className="text-3xl">{post.title}</h2>
            <div className="text-slate-500">
              Created: <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
          <div className="mb-6 border-b border-primary w-fit">
            Author: <span>{post.author}</span>
          </div>

          <p>{post.content}</p>
        </div>
      ) : null}
    </PageWrapper>
  );
}

export default PostDetailsPage;
