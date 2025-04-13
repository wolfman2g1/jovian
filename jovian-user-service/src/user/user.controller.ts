import { Controller } from '@nestjs/common';
import { SignUpDto } from './dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
    
@Controller()
export class UserController {
    @MessagePattern({ cmd: "createUser" })
    createUser(@Payload() signUpDto: SignUpDto) {
        console.log("User created", signUpDto);
        return signUpDto;


     }
}