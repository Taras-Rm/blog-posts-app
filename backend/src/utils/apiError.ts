import { httpStatus } from "./httpStatus";

export class ApiError {
  private code;
  private message;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  static getInfo(err: any) {
    const error =
      err instanceof ApiError
        ? err
        : new ApiError(httpStatus.SEREVR_ERROR, "internal server error");

    return { code: error.code, data: { message: error.message } };
  }
}
