import winston from 'winston';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'http' }),
    new winston.transports.File({ filename: './errors.log', level: 'warn' }),
  ],
});

export const addLogger = (req, res, next) => {
  req.logger = logger;
  next();
};