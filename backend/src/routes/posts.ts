import { Router } from "express";
import { postsController } from "../controllers/posts";
import {
    createPostValidator,
    deletePostValidator,
    getPostValidator,
    updatePostValidator,
} from "../validators/posts";

const router = Router();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Post title"
 *                   content:
 *                     type: string
 *                     example: "Main post content"
 *                   author:
 *                     type: string
 *                     example: "John Doe"
 *                   createdAt:
 *                     type: string
 *                     example: "2024-07-21T07:05:42.484Z"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "internal server error"
 */
router.get("/", postsController.getPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get blog post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Post title"
 *                 content:
 *                   type: string
 *                   example: "Main post content"
 *                 author:
 *                   type: string
 *                   example: "John Doe"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-07-21T07:05:42.484Z"
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "id param should be a number"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "internal server error"
 */
router.get("/:id", getPostValidator, postsController.getPost);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create blog post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Post title"
 *               content:
 *                 type: string
 *                 example: "Main post content"
 *               author:
 *                 type: string
 *                 example: "John Doe"
 *     responses:
 *       201:
 *         description: Post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Post title"
 *                 content:
 *                   type: string
 *                   example: "Main post content"
 *                 author:
 *                   type: string
 *                   example: "John Doe"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-07-21T07:05:42.484Z"
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "title is required"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "internal server error"
 */
router.post("/", createPostValidator, postsController.createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update blog post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Post title"
 *               content:
 *                 type: string
 *                 example: "Main post content"
 *               author:
 *                 type: string
 *                 example: "John Doe"
 *     responses:
 *       200:
 *         description: Post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Post title"
 *                 content:
 *                   type: string
 *                   example: "Main post content"
 *                 author:
 *                   type: string
 *                   example: "John Doe"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-07-21T07:05:42.484Z"
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "title is required"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "internal server error"
 */
router.put("/:id", updatePostValidator, postsController.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete blog post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The post ID
 *     responses:
 *       204:
 *         description: No content, post deleted successfully
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "id param is required"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "internal server error"
 */
router.delete("/:id", deletePostValidator, postsController.deletePost);

export default router;
