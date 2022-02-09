const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.label({
      label: `Label🏷️`,
    }),
    format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
    )
  ),
});
