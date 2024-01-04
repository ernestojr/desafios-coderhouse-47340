import UsersService from '../services/users.service.js';
import { InvalidDataException, NotFoundException } from '../utils.js';

export default class UserController {
  static getAll(filter = {}) {
    return UsersService.getAll(filter);
  }
  
  static create(data) {
    const {
      first_name,
      last_name,
      email,
      age,
    } = data;
    if (
      !first_name ||
      !last_name ||
      !email
    ) {
      throw new InvalidDataException('Todo los datos son requeridos 😱');
    }
    const newUser = {
      first_name,
      last_name,
      email,
      age,
    }
    return UsersService.create(newUser);
  }
  
  static async getById(id) {
    const user = await UsersService.getById(id);
    if (!user) {
      throw new NotFoundException(`Usuario ${id} no encontrado 😱`);
    }
    return user;
  }
  
  static async updateById(id, data) {
    await UserController.getById(id);
    return UsersService.updateById(id, data);
  }

  static async deleteById(id) {
    await UserController.getById(id);
    return UsersService.deleteById(id);
  }
}