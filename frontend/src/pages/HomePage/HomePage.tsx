import PageWrapper from "../../components/PageWrapper";
import PostCard from "../../components/PostCard";
import { Post } from "../../types/post";

function HomePage() {
  const defPosts: Post[] = [
    {
      id: 1,
      title: "First post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor laboriosam quisquam sed nobis porro quas nihil harum eligendi! Quod voluptates sint voluptatum ab velit enim, animi consequuntur perferendis earum.",
      author: "Tar Rom",
      createdAt: "12.02.2001",
    },
    {
      id: 2,
      title: "Second shorter post",
      content:
        "Lorem ipsum dolor sit amet consect harum eligendi! Quod voluptates sint voluptatum ab velit enim, animi consequuntur perferendis earum.",
      author: "Ira Rom",
      createdAt: "21.05.2002",
    },
    {
      id: 3,
      title: "Second shorter post",
      content:
        "Lorem ipsum dolor sit amet consect harum eligendi! Quod voluptates sint voluptatum ab velit enim, animi consequuntur perferendis earum.",
      author: "Ira Rom",
      createdAt: "21.05.2002",
    },
    {
      id: 4,
      title: "Second shorter post",
      content:
        "Lorem ipsum dolor sit amet consect harum eligendi! Quod voluptates sint voluptatum ab velit enim, animi consequuntur perferendis earum.",
      author: "Ira Rom",
      createdAt: "21.05.2002",
    },
    {
      id: 5,
      title: "Second shorter post",
      content:
        "Lorem ipsum dolor sit amet consect harum eligendi! Quod voluptates sint voluptatum ab velit enim, animi consequuntur perferendis earum.",
      author: "Ira Rom",
      createdAt: "21.05.2002",
    },
  ];
  return (
    <PageWrapper title="Blog Posts">
      <div className="space-y-3">
        {defPosts.length > 0 ? (
          defPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="flex justify-center py-10 text-3xl text-slate-500">
            No posts
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default HomePage;
