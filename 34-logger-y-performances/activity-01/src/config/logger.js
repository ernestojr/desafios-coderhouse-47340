import winston from 'winston';

import config from './config.js';

export const devLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'verbose' }),
  ],
});

export const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'http' }),
    new winston.transports.File({ filename: './errors.log', level: 'warn' }),
  ],
});

export const logger = config.env === 'production' ? prodLogger : devLogger;

export const addLogger = (req, res, next) => {
  req.logger = logger;
  next();
};