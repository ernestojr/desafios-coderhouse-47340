import { Router } from 'express';
import UserModel from '../../dao/models/user.model.js';

import UsersController from '../../controllers/users.controller.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const query = {};
    const users = await UsersController.get(query);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:uid', async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    const user = await UsersController.getById(uid);
    if (!user) {
      return res.status(404).json({ message: `User id ${uid} not found 😨.` });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const user = await UsersController.create(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:uid', async (req, res, next) => {
  try {
    const { body, params: { uid } } = req;
    await UserModel.updateOne({ _id: uid }, { $set: body });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/:uid', async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    await UserModel.deleteOne({ _id: uid });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;