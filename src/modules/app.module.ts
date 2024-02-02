import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './userModule';
import { RepositoryModule } from './repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
    UserModule,
    RepositoryModule
  ],
})
export class AppModule {}