export const login = (username, password) => {
  if (!password) {
    throw new Error('No se ha proorcionado un password');
  }
  if (!username) {
    throw new Error('No se ha proporcionado un usuario');
  }
  if (password !== '123') {
    throw new Error('Contraseña incorrecta');
  }
  if (username !== 'coderUser') {
    throw new Error('Credenciales incorrectas');
  }
  // Aca vamos por token y las cookies...
  return 'logueado';
};