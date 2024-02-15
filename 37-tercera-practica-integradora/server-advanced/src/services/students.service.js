import { studentRepository } from '../repositories/index.js';

export default class StudentService {
  static create(data) {
    return studentRepository.create(data);
  }
  static getAll(filter = {}, opts = {}) {
    return studentRepository.get(filter, opts);
  }
  static getById(sid) {
    return studentRepository.getById(sid);
  }
  static updateById(sid, data) {
    return studentRepository.updateById(sid, data);
  }
  static deleteById(sid) {
    return studentRepository.deleteById(sid);
  }
}