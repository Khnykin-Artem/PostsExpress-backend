import ConfigDb from '../types/ConfigDb';
import ConfigHttp from '../types/ConfigHttp';

interface Config {
  http: ConfigHttp;
  db: ConfigDb;
}

export default Config;
