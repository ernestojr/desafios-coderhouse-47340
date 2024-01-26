import UserDao from './user.dao.js';

export default class UserMemoryDao extends UserDao {
  get(filter = {}, opts = {}) { throw new Error('Not implement 😱.'); }
  create(data) { throw new Error('Not implement 😱.'); }
  getById(uid) { throw new Error('Not implement 😱.'); }
  updateById(uid, data) { throw new Error('Not implement 😱.'); }
  deleteById(uid) { throw new Error('Not implement 😱.'); }
}