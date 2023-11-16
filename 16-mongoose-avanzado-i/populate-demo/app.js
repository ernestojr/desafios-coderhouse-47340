import mongoose from 'mongoose';

import CourseModel from './models/course.model.js';
import StudentModel from './models/student.model.js';

const test = async () => {
  const URI = 'mongodb+srv://developer:EP2dJ1E10aQmWh3H@cluster0.wzpvdnu.mongodb.net/school';
  try {
    await mongoose.connect(URI);
    console.log('DB conectada con exito 😁');
    
    /* const student = await StudentModel.create({
      first_name: 'Pedro',
      last_name: 'Ruiz',
      email: 'pr@mail.com',
      gender: 'M',
    });

    console.log('student', student); */

    /* const course = await CourseModel.create({
      title: 'Backend',
      description: 'Curso de backend con node js.',
      difficulty: 8,
      professor: 'Jose Lopez',
    });

    console.log('course', course); */

    /* const cid = '65556fab05f47c89d54bfe71';

    const student = await StudentModel.findOne({ email: 'pr@mail.com' });

    student.courses.push({ course: cid });

    await StudentModel.updateOne({ email: 'pr@mail.com' }, student); */

    const student = await StudentModel.find({ email: 'pr@mail.com' });

    console.log('student', JSON.stringify(student, null, 2));

  } catch (error) {
    console.error('Ah ocurrido un error con la DB 😨', error.message);
  }
};

test();