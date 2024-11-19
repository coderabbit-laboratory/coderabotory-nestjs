import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [],
  synchronize: true,
};

export default databaseConfig;
