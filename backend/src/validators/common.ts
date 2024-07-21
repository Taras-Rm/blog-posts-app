import { body, param } from "express-validator";

const titleValidator = () =>
  body("title")
    .trim()
    .notEmpty()
    .withMessage("title is required")
    .isLength({ min: 3, max: 300 })
    .withMessage("title must be min 3 max 300 characters");

const contentValidator = () =>
  body("content")
    .trim()
    .notEmpty()
    .withMessage("content is required")
    .isLength({ min: 10, max: 1000 })
    .withMessage("content must be min 10 max 1000 characters");

const authorValidator = () =>
  body("author")
    .trim()
    .notEmpty()
    .withMessage("author is required")
    .isLength({ min: 3, max: 300 })
    .withMessage("author must be min 3 max 300 characters");

const idValidator = () =>
  param("id").isInt().withMessage("id param should be a number");

export { authorValidator, contentValidator, idValidator, titleValidator };
