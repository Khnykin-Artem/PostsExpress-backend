import winston from 'winston';
import path from 'path';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

type Info = {
  timestamp?: string;
  level?: string;
  message?: string;
};

const getLevel = function () {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'purple',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss:ms',
  }),

  winston.format.colorize({
    all: true,
  }),

  winston.format.printf(
    ({ timestamp, level, message }: Info): string =>
      `[${String(timestamp)}] ${String(level)}: ${String(message)}`
  )
);

const transports = [
  new winston.transports.Console(),

  new winston.transports.File({
    filename: path.join(__dirname, '..', 'logs', 'error.log'),
    level: 'error',
  }),

  new winston.transports.File({
    filename: path.join(__dirname, '..', 'logs', 'warn.log'),
    level: 'warn',
  }),

  new winston.transports.File({
    filename: path.join(__dirname, '..', 'logs', 'info.log'),
    level: 'info',
  }),

  new winston.transports.File({
    filename: path.join(__dirname, '..', 'logs', 'http.log'),
    level: 'http',
  }),

  new winston.transports.File({
    filename: path.join(__dirname, '..', 'logs', 'debug.log'),
    level: 'debug',
  }),

  new winston.transports.File({
    filename: path.join(__dirname, '..', 'logs', 'all.log'),
  }),
];

const logger = winston.createLogger({
  level: getLevel(),
  format,
  transports,
});

export default logger;
