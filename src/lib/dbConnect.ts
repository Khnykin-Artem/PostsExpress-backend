import { Mongoose } from 'mongoose';
import ConfigDb from './types/ConfigDb';

const dbConnect = async function (db: Mongoose, config: ConfigDb) {
  await db.connect(
    `mongodb://${config.host}:${config.port}/${config.name}`,
    config.settings
  );
};

export default dbConnect;
