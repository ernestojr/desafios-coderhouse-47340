import { Router } from 'express';

import ContactsController from '../../controllers/contacts.controller.js';

const router = Router();

router.get('/contacts', async (req, res, next) => {
  try {
    const contacts = await ContactsController.getAll()
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get('/contacts/:uid', async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    const contact = await ContactsController.getById(uid);
    if (!contact) {
      res.status(404).json({ message: 'Not found contact 😱' });
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
});

router.post('/contacts/', async (req, res, next) => {
  try {
    const { body } = req;
    const contact = await ContactsController.create(body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
});

router.put('/contacts/:uid', async (req, res, next) => {
  try {
    const { params: { uid }, body } = req;
    await ContactsController.updateById(uid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/contacts/:uid', async (req, res, next) => {
  try {
    const { params: { uid } } = req;
    await ContactsController.deleteById(uid);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;