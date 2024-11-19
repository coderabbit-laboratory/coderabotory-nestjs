import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Item } from 'src/models/item';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [Item],
  synchronize: true,
};

export default databaseConfig;
