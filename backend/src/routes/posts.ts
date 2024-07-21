import { Router } from "express";
import { postsController } from "../controllers/posts";
import {
    createPostValidator,
    deletePostValidator,
    getPostValidator,
    updatePostValidator,
} from "../validators/posts";

const router = Router();

router.get("/", postsController.getPosts);
router.get("/:id", getPostValidator, postsController.getPost);
router.post("/", createPostValidator, postsController.createPost);
router.put("/:id", updatePostValidator, postsController.updatePost);
router.delete("/:id", deletePostValidator, postsController.deletePost);

export default router;
