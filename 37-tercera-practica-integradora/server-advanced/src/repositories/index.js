import { StudentDao, /* TeacherDao, CourseDao */ } from '../dao/factory.js';

import StudentRepository from './student.repository.js';
/* import TeacherRepository from './teacher.repository.js';
import CourseRepository from './course.repository.js'; */

export const studentRepository = new StudentRepository(StudentDao);
/* export const teacherRepository = new TeacherRepository(TeacherDao);
export const courseRepository = new CourseRepository(CourseDao); */