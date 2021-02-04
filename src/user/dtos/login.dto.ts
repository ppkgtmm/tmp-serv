import { IsNotEmpty, IsEmail, MinLength, IsString } from 'class-validator';

export class LoginDto{
    @IsEmail({}, { message: 'invalid email entered' })
    @IsNotEmpty({ message: 'email is required' })
    email: string;

    @IsNotEmpty({ message: 'password is required' })
    password: string;
}