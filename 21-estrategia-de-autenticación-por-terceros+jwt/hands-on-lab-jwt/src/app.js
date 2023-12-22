import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import path from 'path';

import indexRouter from './routers/index.router.js';
import usersRouter from './routers/users.router.js';
import sessionsRouter from './routers/sessions.router.js';
import { __dirname } from './utils.js';
import { init as initPassport } from './config/passport.config.js';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

initPassport();
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api', usersRouter, sessionsRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(error);
  res.status(500).json({ status: 'error', message });
});

export default app;
