import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: ['dist/**/*.entity.js'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/migrations/*.js'],
    migrationsTableName: 'migrations',
} as any;


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return config;
  }
}

export const AppDataSource = new DataSource(config);