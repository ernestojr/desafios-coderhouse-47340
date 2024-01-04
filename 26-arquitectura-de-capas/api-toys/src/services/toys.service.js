import ToyDao from '../dao/toy.dao.js';

export default class ToysService {
  static getAll(filter = {}) {
    return ToyDao.getAll(filter);
  }

  static create(data) {
    return ToyDao.create({ ...data, name: data.title });
  }

  static async getById(id) {
    const result = await ToyDao.getAll({ _id: id });
    return result[0];
  }
}