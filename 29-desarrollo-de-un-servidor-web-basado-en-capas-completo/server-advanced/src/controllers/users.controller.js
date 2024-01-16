import UserDao from '../dao/user.mongodb.dao.js';

export default class UsersController {
  static get(filter = {}, opts = {}) {
    return UserDao.get(filter, opts);
  }

  static getById(uid) {
    return UserDao.getById(uid);
  }

  static create(data) {
    return UserDao.create(data);
  }
}