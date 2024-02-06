import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Coder House 🖐️');
});

router.get('/fast', (req, res) => {
  let counter = 0;
  for (let index = 0; index < 10000; index++) {
    counter += index;
  }
  res.status(200).json({ counter, pid: process.pid });
});

router.get('/slow', (req, res) => {
  let counter = 0;
  for (let index = 0; index < 5e8; index++) {
    counter += index
  }
  res.status(200).json({ counter, pid: process.pid });
});

export default router;