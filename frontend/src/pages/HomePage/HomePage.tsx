import { useEffect, useState } from "react";
import { getAllPosts } from "../../api/posts";
import PageWrapper from "../../components/PageWrapper";
import PostCard from "../../components/PostCard";
import Prompt from "../../components/Prompt";
import Loader from "../../components/ui/Loader";
import { Post } from "../../types/post";

function HomePage() {
  const [showDeletePostPrompt, setShowDeletePostPrompt] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAllPosts = async () => {
    try {
      setIsLoading(true);
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.log("api error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);

  return (
    <PageWrapper title="Blog Posts">
      {
        <div className="space-y-3">
          {isLoading ? (
            <div className="flex justify-center pt-10">
              <Loader />
            </div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onDeleteClick={() => setShowDeletePostPrompt(true)}
              />
            ))
          ) : (
            <div className="flex justify-center py-10 text-3xl text-slate-500">
              No posts
            </div>
          )}
        </div>
      }
      <Prompt
        show={showDeletePostPrompt}
        setShow={setShowDeletePostPrompt}
        title="Delete post"
        description="Do you really want to delete post ?"
      />
    </PageWrapper>
  );
}

export default HomePage;
