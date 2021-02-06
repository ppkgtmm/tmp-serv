import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserResponseDto } from 'src/shared/dtos';
import { CreateUserDto, LoginDto } from '../shared/dtos';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('login')
    async login(@Body() body: LoginDto) : Promise<UserResponseDto>{
        return await this.authService.login(body);
    }

    @Post('register')
    async register(@Body() body: CreateUserDto): Promise<UserResponseDto> {
        return await this.authService.register(body);
    }

}
