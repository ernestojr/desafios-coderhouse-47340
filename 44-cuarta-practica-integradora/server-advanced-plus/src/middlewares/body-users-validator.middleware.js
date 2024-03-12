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
    req.logger.error('Todos los datos son requeridos 😱.');
    return next(new InvalidDataException('Invalid data 😱: Todos los campos son requeridos (first_name, last_name, email, password).'));
  }
  if (birthdate) {
    const isValidDate = (new Date(birthdate)).toString() !== 'Invalid Date';
    if (!isValidDate) {
      req.logger.error('Formato de fecha incorrecto 😱.');
      return next(new InvalidDataException('Invalid data 😱: Formato de fecha incorrecto (YYYY-MM-DD).'));
    }
  }
  req.logger.info('Se valido el contenido del body correctamente 😎.');
  next();
};