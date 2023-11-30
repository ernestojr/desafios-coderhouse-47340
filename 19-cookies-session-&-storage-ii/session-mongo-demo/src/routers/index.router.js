import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  if (!req.session.counter) {
    req.session.counter = 1;
  } else {
    req.session.counter++;
  }
  res.render('index', { title: 'Hello People 🖐️', counter: req.session.counter });
});

export default router;