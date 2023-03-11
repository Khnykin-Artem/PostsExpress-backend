import { config } from 'node-config-ts';
import app from './app';
import mongodbConnect from './db/mongodb';
import logger from './lib/logger';

mongodbConnect()
  .then(() => {
    logger.info(`${config.db.mongodb.name} is connected`);
  })
  .catch((err) => {
    logger.error(err);
  });

app.listen(config.server.http.port, config.server.http.host, () => {
  logger.info(
    `Server started on http://${config.server.http.host}:${config.server.http.port}`
  );
});
