import express from 'express';
import path from 'path';
import passport from 'passport';
import cookieParse from 'cookie-parser';

import { __dirname } from './utils.js';
import { init as initPassport } from './config/passport.config.js';
import indexRouter from './routers/index.router.js';
import sessionsRouter from './routers/sessions.router.js';


const app = express();

app.use(cookieParse())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
initPassport();
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api', sessionsRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.error(message);
  res.status(500).json({ message });
});

export default app;