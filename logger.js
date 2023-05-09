const { app } = require('electron');
const { createLogger, transports, format } = require('winston');
const path = require('path');

// Set the log file path and format
//const logFilePath = path.join(app.getPath('userData'), 'logs', 'app.log');
const logFormat = format.combine(
  format.timestamp(),
  format.json()
);

// Create the logger instance
const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new transports.File({ filename: 'logs/app.log' })
  ]
});

module.exports = logger;


