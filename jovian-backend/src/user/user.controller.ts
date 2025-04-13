import { Controller, Post,Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { SignUpDto } from './dto';
    

@Controller("user")
export class UserController { 
    constructor(private userService: UserService) { } // fancy way to inject the service
    @Post("auth/signup") // user/auth/signup
    signup(@Body() dto: SignUpDto) {
        return this.userService.signup();
    }
    @Post("auth/login") // user/auth/login
    login() {
        return this.userService.login();
    }
}