import StudentDao from './student.dao.js';
import StudentModel from '../models/student.model.js';

export default class StudentMongoDao extends StudentDao {
  static create(data) {
    return StudentModel.create(data);
  }
  static get(filter = {}, opts = {}) {
    return StudentModel.find(filter);
  }
  static getById(sid) {
    return StudentModel.findById(sid);
  }
  static updateById(sid, data) {
    const criteria = { _id: sid };
    const operation = { $set: data };
    return StudentModel.updateOne(criteria, operation);
  }
  static deleteById(sid) {
    const criteria = { _id: sid };
    return StudentModel.deleteOne(criteria);
  }
}
