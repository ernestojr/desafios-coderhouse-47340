import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

import indexRouter from './routers/views/index.router.js';
import usersRouter from './routers/api/users.router.js';
import { __dirname } from './utils/utils.js';
import { errorHandlerMiddleware } from './middlewares/error-handler.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/api', usersRouter);

app.use(errorHandlerMiddleware);

export default app;
