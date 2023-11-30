import express from 'express';
import handlebars from 'express-handlebars';
import sessions from 'express-session';
import FileStorage from 'session-file-store';
import path from 'path';

import indexRouter from './routers/index.router.js';
import usersRouter from './routers/users.router.js';
import { __dirname } from './utils.js';

const app = express();

const SESSION_SECRET = '|7@3BBY5jH:@zFQIg_v47HkKP5S#p&Uc';

const fileStorage = FileStorage(sessions);

app.use(sessions({
  store: new fileStorage({ path: path.join(__dirname, 'sessions'), ttl: 100, retries: 0 }),
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/api', usersRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(message);
  res.status(500).json({ status: 'error', message });
});

export default app;
