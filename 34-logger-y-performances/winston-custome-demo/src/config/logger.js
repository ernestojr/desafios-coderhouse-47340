import winston from 'winston';

const customeLevelOpts = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    fatal: 'red',
    error: 'magenta',
    warning: 'yellow',
    info: 'blue',
    debug: 'white',
  },
};

export const logger = winston.createLogger({
  levels: customeLevelOpts.levels,
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize({ colors: customeLevelOpts.colors }),
        winston.format.simple(),
      ),
    }),
    new winston.transports.File({
      filename: './errors.log',
      level: 'debug',
      format: winston.format.simple(),
    }),
  ],
});

export const addLogger = (req, res, next) => {
  req.logger = logger;
  next();
};