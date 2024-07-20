import CreatePostForm from "../../components/forms/EditPostForm";
import PageWrapper from "../../components/PageWrapper";

function CreatePostPage() {
  return (
    <PageWrapper title="Create new post">
      <div className="max-w-lg mx-auto">
        <CreatePostForm />
      </div>
    </PageWrapper>
  );
}

export default CreatePostPage;
