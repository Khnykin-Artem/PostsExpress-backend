import * as db from 'mongoose';
import config from 'config';
import DbUrl from './lib/types/DbUrl';

const dbUrl = `mongodb://${config.get('db.mongodb.host')}:${config.get(
  'db.mongodb.port'
)}/${config.get('db.mongodb.name')}` as DbUrl;

const connect = async function (): Promise<any> {
  await db.connect(dbUrl, config.get('db.mongodb.settings'));
};

export default connect;
