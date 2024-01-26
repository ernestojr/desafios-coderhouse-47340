import UsersService from '../services/users.service.js';

export default class UsersController {
  get(query = {}) {
    const filter = {};
    const opts = {};
    return UsersService.get(filter, opts);
  }

  create(data) {
    return UsersService.create(data);
  }

  getById(uid) {
    return UsersService.getById(uid);
  }

  updateById(uid, data) {
    return UsersService.updateById(uid, data);
  }

  deleteById(uid) {
    return UsersService.deleteById(uid);
  }
}