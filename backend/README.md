# Blog Posts API

This is a basic API that allows us to work with blog posts.

## Technologies

- Node.js
- Express.js
- TypeScript
- Prisma
- express-validator
- jest

## This API contains such endpoints:

### Posts
- **GET** - localhost:3000/api/posts (_get all posts_)
- **GET** - localhost:3000/api/posts/:id (_get post_)
- **PUT** - localhost:3000/api/posts/:id (_update post_)
- **DELETE** - localhost:3000/api/posts/:id (_delete post_)
- **PUT** - localhost:3000/api/posts/:id/verify (_update post_)

## Run app

1. Clone repository
``` bash
git clone https://github.com/Taras-Rm/blog-posts-app.git
```

2. Move to backend folder:
``` bash
cd ./backend
```

3. Install dependencies
``` bash
npm install
```

4. Create **.env** file and add relevant data to this file according to **.env.example** file:

5. To start database run:
``` bash
docker compose up
```

6. Add schema to the database:
``` bash
npx prisma migrate dev
```

7. Start app
``` bash
npm run dev
```

## Run e2e tests

1. Run tests:
``` bash
npx run test:e2e
```