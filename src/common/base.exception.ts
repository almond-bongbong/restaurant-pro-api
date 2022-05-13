export class BaseException extends Error {
  type;
  date;
  info;

  constructor(type: string, message: string, exceptionInfo?: string[]) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }

    this.name = this.constructor.name;
    this.type = type;
    this.date = new Date();

    if (exceptionInfo) this.info = exceptionInfo;
  }
}
