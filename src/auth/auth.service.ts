import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/common/dtos/user.dto';
import { convertToResponse } from 'src/common/formatter';
import { LoginDto } from '../common/dtos/user.login.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

    async login(loginDto: LoginDto) {
        try {
            let user: User = await this.userService.login(loginDto);
            const payload = { _id: user._id, email: user.email, role: user.role };

            return {
                ...convertToResponse(user),
                access_token: this.jwtService.sign(payload),
            };

        } catch (err) {
            throw err;
        }
    }
}
