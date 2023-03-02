import { config } from 'node-config-ts';
import http from 'node:http';
import app from './app';
import db from './db';
import logger from './lib/logger';

const server = http.createServer(app);
void db()

server.listen(config.server.http.port, config.server.http.host, () => {
  logger.info(
    `Server started on http://${config.server.http.host}:${config.server.http.port}`
  );
});
