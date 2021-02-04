import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto, LoginDto } from './dtos';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('signup')
    // @UsePipes(new ValidationPipe({ transform: true }))
    signup(@Body() signUpDto: SignUpDto): object{
        return {};
    }
    @Post('login')
    // @UsePipes(new ValidationPipe({ transform: true }))
    login(@Body() loginDto: LoginDto): object{
        return {};
    }

}
