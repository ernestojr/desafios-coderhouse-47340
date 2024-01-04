import { Router } from 'express';

import ToysController from '../../controllers/toys.controller.js';

const router = Router();

router.get('/toys', async (req, res, next) => {
  try {
    const toys = await ToysController.getAll();
    res.status(200).json(toys);
  } catch (error) {
    next(error);
  }
});

router.get('/toys/:tid', async (req, res, next) => {
  try {
    const { params: { tid } } = req;
    const toys = await ToysController.getById(tid);
    res.status(200).json(toys);
  } catch (error) {
    next(error);
  }
});

router.post('/toys', async (req, res, next) => {
  try {
    const toy = await ToysController.create(req.body);
    res.status(201).json(toy);
  } catch (error) {
    next(error);
  }
});

export default router;