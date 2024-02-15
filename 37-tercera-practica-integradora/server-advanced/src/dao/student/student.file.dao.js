import StudentDao from './student.dao.js';

export default class StudentFileDao extends StudentDao {
  static create(data) { throw new Error('Not implemented 😱.'); }
  static get(filter, opts) { throw new Error('Not implemented 😱.'); }
  static getById(sid) { throw new Error('Not implemented 😱.'); }
  static updateById(sid, data) { throw new Error('Not implemented 😱.'); }
  static deleteById(sid) { throw new Error('Not implemented 😱.'); }
}
