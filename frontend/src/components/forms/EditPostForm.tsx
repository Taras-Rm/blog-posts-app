import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z, ZodType } from "zod";
import { updatePost } from "../../api/posts";
import { EditPost, Post } from "../../types/post";
import Button from "../ui/Button";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

const validation: ZodType<EditPost> = z.object({
  title: z.string().min(3).max(300),
  content: z.string().min(10).max(1000),
  author: z.string().min(3).max(300),
});

interface EditPostFormProps {
  post: Post;
}

function EditPostForm({ post }: EditPostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPost>({
    resolver: zodResolver(validation),
    defaultValues: post,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePost = async (data: EditPost) => {
    try {
      setIsLoading(true);
      await updatePost(post.id, data);
      toast.success("Post updated!");
    } catch (error) {
      toast.error("Failed to update post!");
      console.log("api error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: EditPost) => handleCreatePost(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-3 bg-gray-200/60 p-10 rounded-lg shadow-md"
    >
      <Input
        label="Title"
        register={register("title")}
        error={errors.title?.message}
      />
      <TextArea
        label="Content"
        register={register("content")}
        error={errors.content?.message}
      />
      <Input
        label="Author"
        register={register("author")}
        error={errors.author?.message}
      />

      <Button type="submit" isLoading={isLoading}>
        Update
      </Button>
    </form>
  );
}

export default EditPostForm;
