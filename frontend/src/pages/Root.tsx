import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import CreatePostPage from "./CreatePostPage/CreatePostPage";
import EditPostPage from "./EditPostPage/EditPostPage";
import HomePage from "./HomePage/HomePage";
import PostDetailsPage from "./PostDetailsPage/PostDetailsPage";
import { routes } from "./routes";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.postDetails} element={<PostDetailsPage />} />
        <Route path={routes.editPost} element={<EditPostPage />} />
        <Route path={routes.createPost} element={<CreatePostPage />} />
      </Route>
    </Routes>
  );
}

export default Root;
