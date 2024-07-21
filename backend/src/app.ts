import express from "express";
import errorHandler from "./middlewares/errorHandler";
import appRouter from "./routes";

const app = express();

app.use(express.json());

app.use("/api", appRouter);

app.use(errorHandler);

export default app;
