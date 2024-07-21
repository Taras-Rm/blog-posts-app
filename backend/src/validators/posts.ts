import validate from "../middlewares/validation";
import {
    authorValidator,
    contentValidator,
    idValidator,
    titleValidator,
} from "./common";

const createPostValidator = validate([
  titleValidator(),
  contentValidator(),
  authorValidator(),
]);

const updatePostValidator = validate([
  titleValidator(),
  contentValidator(),
  authorValidator(),
  idValidator(),
]);

const getPostValidator = validate([idValidator()]);

const deletePostValidator = validate([idValidator()]);

export {
    createPostValidator, deletePostValidator, getPostValidator, updatePostValidator
};

