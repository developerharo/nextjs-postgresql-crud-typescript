import {Pool} from 'pg';
import { isGeneratorFunction } from 'util/types';

let conn: any

if (!conn) {
  conn = new Pool({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'tasksdb'
  });
}

export { conn }
