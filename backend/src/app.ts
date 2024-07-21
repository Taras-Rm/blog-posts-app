import express from "express";
import errorHandler from "./middlewares/errorHandler";
import appRouter from "./routes";
import { setupSwagger } from "./utils/swagger";

const app = express();

app.use(express.json());

app.use("/api", appRouter);

app.use(errorHandler);

setupSwagger(app);

export default app;
