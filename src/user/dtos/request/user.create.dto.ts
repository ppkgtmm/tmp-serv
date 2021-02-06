import {
    IsNotEmpty,
    IsEmail,
    MinLength
} from 'class-validator';

export class CreateUserDto{

    @IsEmail({}, { message: 'invalid email entered' })
    @IsNotEmpty({ message: 'email is required' })
    email: string;

    @MinLength(8, { message: 'password should be at least 8 characters long' })
    @IsNotEmpty({ message: 'password is required' })
    password: string;
}

