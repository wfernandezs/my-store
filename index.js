const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const logger = require('./utils/logging');

const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Running on http://localhost:${port}`);
});
