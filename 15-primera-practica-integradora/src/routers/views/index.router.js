import { Router } from 'express';
import StudentsManager from '../../dao/Students.manager.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Clase Intregradora ❤️‍🔥' });
});

router.get('/students', async (req, res) => {
  const students = await StudentsManager.get();
  res.render('students', { students: students.map(student => student.toJSON()), title: 'Lista de estudiantes ❤️‍🔥' })
});


export default router;