import { Express } from "express";
import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const doc: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog Posts API",
      version: "1.0.0",
      description: "Swagger Implementation for Blog Posts API",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(doc);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
