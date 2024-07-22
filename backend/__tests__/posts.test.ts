import request from "supertest";
import app from "../src/app";
import { cleanDb } from "../src/database";

beforeEach(async () => {
  await cleanDb();
});

// create new post
describe("POST /api/posts", () => {
  const PATH = "/api/posts";

  it("error (no title), status code 400", async () => {
    const post = {
      content: "First post content",
      author: "user",
    };

    const res = await request(app).post(PATH).send(post);

    expect(res.statusCode).toBe(400);

    expect(res.body.message).toBe("title is required");
  });

  it("error (too short content), status code 400", async () => {
    const post = {
      title: "Post",
      content: "Fi",
      author: "user",
    };

    const res = await request(app).post(PATH).send(post);

    expect(res.statusCode).toBe(400);

    expect(res.body.message).toBe("content must be min 10 max 1000 characters");
  });

  it("success, create post, status code 201", async () => {
    const post = {
      title: "First post",
      content: "First post content",
      author: "user",
    };

    const res = await request(app).post(PATH).send(post);

    expect(res.statusCode).toBe(201);

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("createdAt");
    expect(res.body.title).toBe(post.title);
    expect(res.body.content).toBe(post.content);
    expect(res.body.author).toBe(post.author);
  });
});

// get posts
describe("GET /api/posts", () => {
  const PATH = "/api/posts";

  it("success, empty array of posts, status code 200", async () => {
    const res = await request(app).get(PATH);

    expect(res.statusCode).toBe(200);

    expect(res.body).toEqual([]);
  });

  it("success, array of posts, status code 200", async () => {
    const posts = [
      {
        title: "Post 1",
        content: "First post content",
        author: "user",
      },
      {
        title: "Post 2",
        content: "Second post content",
        author: "user",
      },
    ];

    const createPostRes1 = await request(app).post(PATH).send(posts[0]);
    expect(createPostRes1.statusCode).toBe(201);
    const createPostRes2 = await request(app).post(PATH).send(posts[1]);
    expect(createPostRes2.statusCode).toBe(201);

    const res = await request(app).get(PATH);

    expect(res.statusCode).toBe(200);

    expect(res.body.length).toBe(2);
    expect(res.body).toEqual([createPostRes2.body, createPostRes1.body]);
  });
});

// get post by id
describe("GET /api/posts/:id", () => {
  const PATH = "/api/posts";

  it("error (invalid post id format), status code 400", async () => {
    const res = await request(app).get(`${PATH}/${"dsges"}`);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("id param should be a number");
  });

  it("error (not existing post id), status code 400", async () => {
    const notExistingId = 0;
    const res = await request(app).get(`${PATH}/${notExistingId}`);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual(
      `can not find post with id: ${notExistingId}`
    );
  });

  it("success (get post by id), status code 200", async () => {
    const post = {
      title: "First post",
      content: "First post content",
      author: "user",
    };

    const createPostRes = await request(app).post(PATH).send(post);
    expect(createPostRes.statusCode).toBe(201);

    const res = await request(app)
      .get(`${PATH}/${createPostRes.body.id}`)
      .send(post);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(createPostRes.body);
  });
});

// update post by id
describe("PUT /api/posts/:id", () => {
  const PATH = "/api/posts";

  it("error (invalid post id format), status code 400", async () => {
    const res = await request(app).put(`${PATH}/${"dsges"}`);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("id param should be a number");
  });

  it("error (no title), status code 400", async () => {
    const post = {
      title: "First post",
      content: "First post content",
      author: "user",
    };

    const createPostRes = await request(app).post(PATH).send(post);
    expect(createPostRes.statusCode).toBe(201);

    const res = await request(app)
      .put(`${PATH}/${createPostRes.body.id}`)
      .send({
        content: "First post content update",
        author: "user",
      });

    expect(res.statusCode).toBe(400);

    expect(res.body.message).toBe("title is required");
  });

  it("success (update post), status code 200", async () => {
    const post = {
      title: "First post",
      content: "First post content",
      author: "user",
    };

    const createPostRes = await request(app).post(PATH).send(post);
    expect(createPostRes.statusCode).toBe(201);

    const updatePost = {
      title: "First post update",
      content: "First post content update",
      author: "user",
    };

    const res = await request(app)
      .put(`${PATH}/${createPostRes.body.id}`)
      .send(updatePost);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createPostRes.body.id);
    expect(res.body.createdAt).toBe(createPostRes.body.createdAt);
    expect(res.body.title).toBe(updatePost.title);
    expect(res.body.content).toBe(updatePost.content);
    expect(res.body.author).toBe(updatePost.author);
  });
});

// delete post by id
describe("DELETE /api/posts/:id", () => {
  const PATH = "/api/posts";

  it("error (invalid post id format), status code 400", async () => {
    const res = await request(app).delete(`${PATH}/${"dsges"}`);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("id param should be a number");
  });

  it("error (not existing post id), status code 400", async () => {
    const post = {
      title: "First post",
      content: "First post content",
      author: "user",
    };

    const createPostRes = await request(app).post(PATH).send(post);
    expect(createPostRes.statusCode).toBe(201);

    const notExistingId = 0;
    const res = await request(app).delete(`${PATH}/${notExistingId}`);

    expect(res.statusCode).toBe(400);

    expect(res.body.message).toBe(
      `can not find post with id: ${notExistingId}`
    );
  });

  it("success (delete post), status code 204", async () => {
    const post = {
      title: "First post",
      content: "First post content",
      author: "user",
    };

    const createPostRes = await request(app).post(PATH).send(post);
    expect(createPostRes.statusCode).toBe(201);

    const res = await request(app).delete(`${PATH}/${createPostRes.body.id}`);

    expect(res.statusCode).toBe(204);
  });
});
