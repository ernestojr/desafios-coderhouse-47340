import StudentService from '../services/students.service.js';
import EmailService from '../services/email.service.js';
import { NotFoundException } from '../utils/exceptions.js';

export default class StudentsController {

  static async create(data) {
    const student = await StudentService.create(data);
    const emailService = EmailService.getInstance();
    await emailService.sendWelcomeEmail(student);
    return student;
  }
  static getAll(query = {}) {
    const filter = {};
    const opts = {};
    return StudentService.getAll(filter, opts);
  }
  static async getById(sid) {
    const student = await StudentService.getById(sid);
    if (!student) {
      throw new NotFoundException(`No se encontro el estudiante (${sid}) 😱`);
    }
    return student;
  }
  static updateById(sid, data) {
    return StudentService.updateById(sid, data);
  }
  static deleteById(sid) {
    return StudentService.deleteById(sid);
  }
}