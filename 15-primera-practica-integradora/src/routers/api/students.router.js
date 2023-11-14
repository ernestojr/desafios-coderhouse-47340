import { Router } from 'express';
import StudentsManager from '../../dao/Students.manager.js';

const router = Router();

router.get('/students', async (req, res) => {
  const students = await StudentsManager.get();
  res.status(200).json(students);
});

router.get('/students/:sid', async (req, res) => {
  const { sid } = req.params;
  const students = await StudentsManager.getById(sid);
  res.status(200).json(students);
});

router.post('/students', async (req, res) => {
  const { body } = req;
  const students = await StudentsManager.create(body);
  res.status(201).json(students);
});

router.put('/students/:sid', async (req, res) => {
  const { sid } = req.params;
  const { body } = req;
  await StudentsManager.updateById(sid, body);
  res.status(204).end();
});

router.delete('/students/:sid', async (req, res) => {
  const { sid } = req.params;
  await StudentsManager.deleteById(sid);
  res.status(204).end();
});



export default router;