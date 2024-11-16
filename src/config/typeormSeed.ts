import { DataSource } from 'typeorm';
import { defaultOptions } from './typeorm';

const ENV = process.env.NODE_ENV;
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: !ENV ? '.env' : `.env.${ENV}` });

const datasource1 = new DataSource({
  ...defaultOptions,
  metadataTableName: 'seeds',
  migrations: ['dist/database/seed/*{.ts,.js}'],
});
export default datasource1;
