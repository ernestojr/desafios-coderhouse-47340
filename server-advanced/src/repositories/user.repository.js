export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  get(filter = {}, opts = {}) {
    return this.dao.get(filter, opts);
  }

  getById(uid) {
    return this.dao.getById(uid);
  }

  create(data) {
    return this.dao.create(data);
  }

  updateById(uid, data) {
    return this.dao.updateById(uid, data);
  }

  deleteById(uid) {
    return this.dao.deleteById(uid);
  }
}