import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import {ConfigService} from '@nestjs/config';
import {getMongoConnectionString} from '@taskforce/core';

export function getMongoDbConfig(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => ({
      uri: getMongoConnectionString({
        username: configService.get<string>('databaseName.user'),
        password: configService.get<string>('databaseName.password'),
        host: configService.get<string>('databaseName.host'),
        port: configService.get<number>('databaseName.port'),
        authDatabase: configService.get<string>('databaseName.authBase'),
        databaseName: configService.get<string>('databaseName.database'),
      })
    }),
    inject: [ConfigService]
  }
}
