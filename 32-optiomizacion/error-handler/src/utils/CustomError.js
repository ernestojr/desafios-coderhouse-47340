export class CustomError {
  static create({ name = 'Error', cause, message, code = 1 }) {
    const error = new Error(message);
    error.name = name;
    error.cause = cause;
    error.code = code;
    throw error;
  }
}