import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto, LoginDto } from './dtos';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('signup')
    async signup(@Body() signUpDto: SignUpDto): Promise<object>{
       return await this.userService.signup(signUpDto);
    }
    @Post('login')
    login(@Body() loginDto: LoginDto): object{
        return {};
    }

}
