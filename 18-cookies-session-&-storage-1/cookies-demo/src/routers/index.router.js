import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Coder House 🖐️');
});

router.get('/setCookie', (req, res) => {
  res
    .cookie('coder-house-cookie', 'Esta es una cookie con chispas de chocolate 🍪.', { maxAge: 30000 })
    .cookie('coder-house-cookie-2', 'Esta es otra cookie con chispas de chocolate 🍪😅.', { maxAge: 30000 })
    .send('La cookie fue configurada exitosamenet 😁');
});

router.get('/setCookieSigned', (req, res) => {
  res
    .cookie('coder-house-cookie-signed', 'Esta es una cookie con chispas de chocolate 🍪 con candado.', { maxAge: 30000, signed: true })
    .send('La cookie fue configurada exitosamenet 😁');
});

router.get('/getCookieSigned', (req, res) => {
  const cookie = req.signedCookies;
  res.json(cookie);
});

router.get('/getCookie', (req, res) => {
  const cookie = req.cookies;
  res.json(cookie);
});


router.get('/clearCookie', (req, res) => {
  res
    .clearCookie('coder-house-cookie')
    .send('Me comi la cookie 😁');
});

export default router;