import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import indexRouter from './routers/views/index.router.js';
import usersRouter from './routers/api/users.router.js';
import businessRouter from './routers/api/business.router.js';
import ordersRouter from './routers/api/orders.router.js';
import authRouter from './routers/api/auth.router.js';
import { __dirname } from './utils.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5500',
  methods: ['GET','POST','PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser('shhh'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/auth', authRouter);

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.log(message);
  res.status(500).json({ status: 'error', message });
});

export default app;
