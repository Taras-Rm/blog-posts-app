import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { createPost } from "../../api/posts";
import { CreatePost } from "../../types/post";
import Button from "../ui/Button";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

const validation: ZodType<CreatePost> = z.object({
  title: z.string().min(3).max(300),
  content: z.string().min(10).max(1000),
  author: z.string().min(3).max(300),
});

function CreatePostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePost>({
    resolver: zodResolver(validation),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePost = async (data: CreatePost) => {
    try {
      setIsLoading(true);
      await createPost(data);
      reset();
    } catch (error) {
      console.log("api error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: CreatePost) => handleCreatePost(data);

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

      <Button type="submit" isLoading={isLoading}>Create</Button>
    </form>
  );
}

export default CreatePostForm;
