import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  const token = 'qwerty';
  res
    .cookie('access_token', token, { maxAge: 1000*60*30, httpOnly: true })
    .status(200)
    .json({ message: 'Usuario autenticado con exito 😍' });
});

router.get('/try-token', (req, res) => {
  console.log('req.cookies', req.cookies.access_token);
  res.status(200).json({ message: req.cookies });
})

export default router;