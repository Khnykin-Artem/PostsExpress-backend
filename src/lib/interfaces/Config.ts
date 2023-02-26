import { IConfig } from 'config';
import ConfigDb from '../types/ConfigDb';
import ConfigHttp from '../types/ConfigHttp';

interface Config extends IConfig {
  http: ConfigHttp;
  db: ConfigDb;
}

export default Config;
