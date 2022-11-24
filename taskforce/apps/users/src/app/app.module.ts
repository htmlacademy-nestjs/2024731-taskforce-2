import { Module } from '@nestjs/common';
import { TaskUserModule } from './task-user/task-user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from './app.constants';
import databaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig],
    }),
    TaskUserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
