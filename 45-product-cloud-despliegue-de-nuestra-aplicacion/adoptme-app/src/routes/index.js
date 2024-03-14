import { Router } from 'express';

import usersController from '../controllers/users.controller.js';
import petsController from '../controllers/pets.controller.js';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).render('index', { title: 'Bienvenida' });
});

router.get('/users', async (req, res) => {
  const users = await usersController.getAllUsers();
  res.status(200).render('users', { title: 'Usuarios', users });
});

router.get('/pets', async (req, res) => {
  const pets = await petsController.getAllPets();
  res.status(200).render('pets', { title: 'Mascotas', pets });
});

export default router;