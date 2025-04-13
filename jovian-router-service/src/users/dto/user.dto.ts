import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    username: string;
    @IsNotEmpty() 
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsString()
    email: string;
    @IsNotEmpty()
    @IsEmail()
    first_name: string;
    @IsNotEmpty()
    @IsString()
    last_name: string;
    @IsNotEmpty()
    @IsPhoneNumber()
    phone_number: string;
}