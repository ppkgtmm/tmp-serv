import { IsNotEmpty, IsEmail, MinLength, IsString } from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty({ message: '1.email is required' })
    @IsString({ message: '2.email should be a string' })
    @IsEmail({}, { message: '3.invalid email entered' })
    email: string;

    @IsNotEmpty({ message: '1.password is required' })
    @IsString({ message: '2.password should be a string' })
    @MinLength(8, { message: '3.password should be at least 8 characters long' })
    password: string;

    role: string = 'normal_user';
    
    @IsString()
    token: string;
}

