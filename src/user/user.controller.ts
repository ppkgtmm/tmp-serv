import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('signup')
    // @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createUserDto: CreateUserDto): object{
        return {};
    }

}
