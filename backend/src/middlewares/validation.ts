import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";
import { ApiError } from "../utils/apiError";
import { httpStatus } from "../utils/httpStatus";

const validate = (validations: ValidationChain[]) => {
  return async function name(req: Request, _: Response, next: NextFunction) {
    try {
      await Promise.all(validations.map((validation) => validation.run(req)));

      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }

      throw new ApiError(httpStatus.BAD_REQUEST, errors.array()[0].msg);
    } catch (error) {
      next(error);
    }
  };
};

export default validate;
