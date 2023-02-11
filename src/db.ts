import * as db from 'mongoose';
import config from 'config';

const dbConnect = async function (): void {
  db.connect(
    `mongodb://${config.get('db.mongodb.host')}:${config.get(
      'db.mongodb.port'
    )}/${config.get('db.mongodb.name')}`,
    config.get('db.mongodb.settings')
  ) as unknown;
};

export default dbConnect;
