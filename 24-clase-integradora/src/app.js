import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import cookieParser from 'cookie-parser';
import passport from 'passport';

import { init as initPassport } from './config/passport.config.js';
import indexRouter from './routers/views/index.router.js';
import usersRouter from './routers/api/users.router.js';
import coursesRouter from './routers/api/courses.router.js';
import authRouter from './routers/api/auth.router.js';
import { __dirname } from './utils.js';

const app = express();

const COOKIE_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

app.use(cookieParser(COOKIE_SECRET))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

initPassport();

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api', authRouter, usersRouter, coursesRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(message);
  res.status(500).json({ status: 'error', message });
});

export default app;
