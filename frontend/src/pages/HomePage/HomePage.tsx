import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deletePost, getAllPosts } from "../../api/posts";
import PageWrapper from "../../components/PageWrapper";
import PostCard from "../../components/PostCard";
import Prompt from "../../components/Prompt";
import Loader from "../../components/ui/Loader";
import { Post } from "../../types/post";

function HomePage() {
  const [deletePostId, setDeletePostId] = useState<number | null>(null);

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAllPosts = async () => {
    try {
      setIsLoading(true);
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      toast.error("Failed to get all posts.");
      console.log("api error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePost = async () => {
    if (!deletePostId) {
      return;
    }
    try {
      await deletePost(deletePostId);
      await handleGetAllPosts();
      toast.success("Post deleted!");
    } catch (error) {
      toast.error("Failed to delete post.");
      console.log("api error: ", error);
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
                onDeleteClick={(id: number) => setDeletePostId(id)}
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
        show={!!deletePostId}
        close={() => setDeletePostId(null)}
        title="Delete post"
        description="Do you really want to delete post ?"
        onConfirm={handleDeletePost}
        onCancel={() => setDeletePostId(null)}
      />
    </PageWrapper>
  );
}

export default HomePage;
