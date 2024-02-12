import { InvalidDataException } from '../utils/exception.js';

export const bodyUsersValidator = (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password,
    birthdate,
  } = req.body;
  if (
    !first_name ||
    !last_name ||
    !email ||
    !password
  ) {
    return next(new InvalidDataException('Invalid data 😱'));
  }
  if (birthdate) {
    const isValidDate = (new Date(birthdate)).toString() !== 'Invalid Date';
    if (isValidDate) {
      return next(new InvalidDataException('Invalid data 😱'));
    }
  }
  next();
};