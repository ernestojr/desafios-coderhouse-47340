import StudentModel from '../models/student.model.js';

export default class StudentsManager {
  static get() {
    return StudentModel.find();
  }
  static async getById(sid) {
    const student = await StudentModel.findById(sid);
    if (!student) {
      throw new Error('Estudiantes no encontrado.');
    }
    return student;
  }
  static async create(data) {
    const student = await StudentModel.create(data);
    console.log(`Estudiante creado correctamente (${student._id}) 😁.`);
    return student;
  }

  static async updateById(sid, data) {
    await StudentModel.updateOne({ _id: sid }, { $set: data });
    console.log(`Estudiante actualizado correctamente (${sid}) 😁.`);
  }

  static async deleteById(sid) {
    await StudentModel.deleteOne({ _id: sid });
    console.log(`Estudiante eliminado correctamente (${sid}) 🤔.`);
  }

}
