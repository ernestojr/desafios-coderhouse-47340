import UsersService from '../services/users.service.js';
import { getFilterAndOpts } from '../utils/utils.js';

export default class UsersController {
  get(query = {}) {
    const { filter, opts } = getFilterAndOpts(query);
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