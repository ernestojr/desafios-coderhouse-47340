import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

const whiteList = process.env.ORIGINS_ALLOWED.split(',');
const COOKIE_SECRET = process.env.COOKIE_SECRET;

app.use(cors({
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.'));
    }
  },
  credentials: true,
}));

app.use(cookieParser(COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/demo', (req, res) => {
  if (req.signedCookies.token) {
    console.log('req.signedCookies', req.signedCookies.token);
  } else {
    res.cookie('token', 'jwt-token', { maxAge: 1000*30, httpOnly: true, signed: true });
    console.log('Cookie configured 😎');
  }
  res.status(200).json({ message: 'Hello from backend 😁' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 😎`);
});