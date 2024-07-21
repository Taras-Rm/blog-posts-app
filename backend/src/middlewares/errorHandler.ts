import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/apiError";

const errorHandler = (
  error: any,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Error: ", error);

  const info = ApiError.getInfo(error);

  res.status(info.code).json(info.data);
};

export default errorHandler;
