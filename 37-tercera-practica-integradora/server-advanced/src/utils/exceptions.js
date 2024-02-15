export class Exception extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundException extends Exception {
  constructor(message) {
    super(message, 404);
  }
}

export class InvalidDataException extends Exception {
  constructor(message) {
    super(message, 400);
  }
}

export class UnathorizedException extends Exception {
  constructor(message) {
    super(message, 401);
  }
}

export class AppException extends Exception {
  constructor(message) {
    super(message, 500);
  }
}