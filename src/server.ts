import { config } from 'node-config-ts';
import http from 'node:http';
import app from './app';
import db from './db';

const server = http.createServer(app);
db().then().catch();

server.listen(config.server.http.port, config.server.http.host, () => {
  console.log(
    `Server started on http://${config.server.http.host}:${config.server.http.port}`
  );
});
