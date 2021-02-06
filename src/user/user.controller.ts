import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginDto } from './dtos';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private readonly authService: AuthService
    ) { }
    
    @Post('signup')
    async signup(@Body() createUserDto: CreateUserDto): Promise<object>{
       return await this.userService.createUser(createUserDto);
    }
    @Post('login')
    async login(@Body() loginDto :  LoginDto) {
        return this.authService.login(loginDto);
    }
}
