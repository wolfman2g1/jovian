import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule
],
})
export class AppModule {}
