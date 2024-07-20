import EditPostForm from "../../components/forms/EditPostForm";
import PageWrapper from "../../components/PageWrapper";

function EditPostPage() {
  return (
    <PageWrapper title="Edit post">
      <div className="max-w-lg mx-auto">
        <EditPostForm />
      </div>
    </PageWrapper>
  );
}

export default EditPostPage;
