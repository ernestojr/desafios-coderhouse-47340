import { Router } from 'express';
import UserModel from '../../models/user.model.js';
import { CustomError } from '../../utils/CustomError.js';
import { generatorUserError, generatorUserIdError } from '../../utils/CauseMessageError.js';
import EnumsError from '../../utils/EnumsError.js';

const router = Router();

router.get('/users', async (req, res, next) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/users/:uid', async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    if (!parseInt(uid, 10)) {
      CustomError.create({
        name: 'Invalid user id format',
        cause: generatorUserIdError(uid),
        message: 'Ocurrio un errro mientras intentamos obtener un usuario por su id 😱',
        code: EnumsError.INVALID_PARAMS_ERROR,
      });
    }
    const user = await UserModel.findById(uid);
    if (!user) {
      return res.status(401).json({ message: `User id ${uid} not found 😨.` });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/users/', async (req, res, next) => {
  try {
    const { body } = req;
    const {
      first_name,
      last_name,
      email,
      age,
    } = body;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !age
    ) {
      CustomError.create({
        name: 'Invalid data user',
        cause: generatorUserError({
          first_name,
          last_name,
          email,
          age,
        }),
        message: 'Ocurrio un errro mientras intentamos crear un nuevo usuario 😱',
        code: EnumsError.BAD_REQUEST_ERROR,
      })
    }
    const user = await UserModel.create(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/users/:uid', async (req, res, next) => {
  try {
    const { body, params: { uid } } = req;
    await UserModel.updateOne({ _id: uid }, { $set: body });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/users/:uid', async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    await UserModel.deleteOne({ _id: uid });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;