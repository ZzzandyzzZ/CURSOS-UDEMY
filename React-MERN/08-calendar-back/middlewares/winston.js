const winston = require('winston');
const expressWinston = require('express-winston');
const path = require('path');

// Define el formato de registro personalizado
const customFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({
    format: 'YYMMDD HH:mm:ss'
  }),
  winston.format.printf(info => {
    const { level, timestamp, message } = info;
    return `[${level} ${timestamp}] ${message}`;
  })
);

// Configura Winston para registrar en la consola
const logger = winston.createLogger({
  level: 'info',
  format: customFormat,
  transports: [new winston.transports.Console()]
});

// Configura Express Winston para registrar solicitudes HTTP en la consola
module.exports = {winstonLogger:
  expressWinston.logger({
  winstonInstance: logger,
  meta: false,
  msg: '{{res.statusCode}} {{req.method}} {{req.url}} {{res.responseTime}}ms',
  colorize: true
})};
