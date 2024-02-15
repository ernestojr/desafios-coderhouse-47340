export default class StudentRepository {
  constructor(dao) {
    this.dao = dao;
  }
  create(data) {
    return this.dao.create(data);
  }
  get(filter = {}, opts = {}) {
    return this.dao.get(filter, opts);
  }
  getById(sid) {
    return this.dao.getById(sid);
  }
  updateById(sid, data) {
    return this.dao.updateById(sid, data);
  }
  deleteById(sid) {
    return this.dao.deleteById(sid);
  }
}