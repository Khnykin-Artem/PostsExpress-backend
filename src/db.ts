import * as db from 'mongoose';
import { config } from 'node-config-ts';
import DbUrl from './lib/types/DbUrl';

const dbUrl: DbUrl = `mongodb://${config.db.mongodb.host}:${config.db.mongodb.port}/${config.db.mongodb.name}`;

const connect = async function (): Promise<any> {
  await db.connect(dbUrl);
};

export default connect;
