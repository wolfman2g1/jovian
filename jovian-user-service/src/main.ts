import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config';

async function bootstrap() {
  console.log('Users Microservice is Running!');
  console.log('NATS URL:', process.env.NATS);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [`${process.env.NATS}`],
      },
    },
  );
  await app.listen();
}
bootstrap();
