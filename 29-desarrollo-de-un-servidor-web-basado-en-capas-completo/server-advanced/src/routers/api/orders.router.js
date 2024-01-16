import { Router } from 'express';

import OrdersController from '../../controllers/orders.controller.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const orders = await OrdersController.get({});
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

router.get('/:oid', async (req, res, next) => {
  try {
    const { params: { oid } } = req;
    const order = await OrdersController.getById(oid);
    if (!order) {
    return res.status(404).json({ message: `Order ${bid} not found 😱` });
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const order = await OrdersController.create(body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
});

router.post('/:bid/resolve', async (req, res, next) => {
  try {
    const { body, params: { bid } } = req;
    await OrdersController.resolve(bid, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});



export default router;