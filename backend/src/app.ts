import express from "express";
import appRouter from "./routes";

const app = express();

app.use("/api", appRouter);

export default app;
