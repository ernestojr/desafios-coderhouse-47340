import { Router } from 'express';
import { bodyUsersValidator } from '../../middlewares/body-users-validator.middleware.js';
import { emailUserValidator } from '../../middlewares/email-user-validator.middleware.js';
import AuthController from '../../controllers/auth.controller.js';

const router = Router();

router.post('/auth/register',
  bodyUsersValidator,
  emailUserValidator,
  async (req, res, next) => {
  try {
    const { body } = req;
    const user = await AuthController.register(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/auth/login', async (req, res, next) => {
  try {
    const { body } = req;
    const token = await AuthController.login(body);
    res
      .status(201)
      .cookie('access_token', token, { maxAge: 1000*60*60*24, httpOnly: true })
      .json({ message: 'Logged in successfully 🎉.' });
  } catch (error) {
    next(error);
  }
});

export default router;