import { Router } from 'express';

import passport from 'passport';

import CourseModel from '../../models/course.model.js';

import { authMiddleware } from '../../utils.js';

const router = Router();

router.post('/courses',
  passport.authenticate('jwt', { session: false }),
  authMiddleware(['admin']),
  async (req, res) => {
    const course = await CourseModel.create(req.body);
    res.status(201).json(course);
});

router.get('/courses/:cid',
  passport.authenticate('jwt', { session: false }),
  authMiddleware(['student', 'professor', 'admin']),
  async (req, res) => {
    const course = await CourseModel.findById(req.params.cid).populate('professor').populate('students.student');
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado.'});
    }
    res.status(200).json(course);
});

router.get('/courses/',
  passport.authenticate('jwt', { session: false }),
  authMiddleware(['student', 'professor', 'admin']),
    async (req, res) => {
    const courses = await CourseModel.find({});
    res.status(200).json(courses);
});

export default router;