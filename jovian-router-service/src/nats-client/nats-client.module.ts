import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config'
@Module({
    imports: [
 ClientsModule.register([
      {
        name: 'JOVIAN_ROUTER_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [`${process.env.NATS}`],
        }
    }
  ]),
    ],
    exports: [
 ClientsModule.register([
      {
        name: 'JOVIAN_ROUTER_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [`${process.env.NATS}`],
        }
    }
  ]),
    ]
})
export class NatsClientModule {}