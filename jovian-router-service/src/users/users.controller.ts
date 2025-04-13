import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { SignUpDto } from './dto';
@Controller("users")
export class UsersController {
constructor(@Inject('JOVIAN_ROUTER_SERVICE') private natsClient: ClientProxy) { }
    @Post("create")
    createUser(@Body() dto: SignUpDto) { }

 }