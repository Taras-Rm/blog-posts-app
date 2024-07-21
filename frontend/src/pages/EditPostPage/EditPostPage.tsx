import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts";
import EditPostForm from "../../components/forms/EditPostForm";
import PageWrapper from "../../components/PageWrapper";
import Loader from "../../components/ui/Loader";
import { Post } from "../../types/post";

function EditPostPage() {
  const params = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetPost = async () => {
    try {
      setIsLoading(true);
      const data = await getPost(Number(params.id));
      setPost(data);
    } catch (error) {
      console.log("api error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <PageWrapper title="Edit post">
      {isLoading ? (
        <div className="flex justify-center pt-10">
          <Loader />
        </div>
      ) : post ? (
        <div className="max-w-lg mx-auto">
          <EditPostForm post={post} />
        </div>
      ) : null}
    </PageWrapper>
  );
}

export default EditPostPage;
