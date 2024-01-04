import ToysService from '../services/toys.service.js';
import { InvalidDataException, NotFoundException } from '../utils.js';

export default class ToysController {
  static getAll() {
    return ToysService.getAll({});
  }

  static create(data) {
    const {
      title,
      price,
      description,
      image,
    } = data;
    if (
      !title ||
      !price ||
      !description
    ) {
      throw new InvalidDataException('Todos los campos son requidos 😱');
    }
    const newToy = {
      title,
      price,
      description,
      image,
    }
    return ToysService.create(newToy);
  }

  static async getById(id) {
    const user = await ToysService.getById(id);
    if (!user) {
      throw new NotFoundException(`Usuario ${id} no encontrado 😱`);
    }
    return user;
  }
}