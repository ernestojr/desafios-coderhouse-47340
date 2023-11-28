import express from 'express';
import path from 'path';
import sessions from 'express-session';

import { __dirname } from './utils.js';
import indexRouter from './routers/index.router.js';

const app = express();

const SESSION_SECRET = '|7@3BBY5jH:@zFQIg_v47HkKP5S#p&Uc';

app.use(sessions({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.error(message);
  res.status(500).json({ message });
});

export default app;