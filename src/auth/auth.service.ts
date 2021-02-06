import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginDto, UserResponseDto } from 'src/shared/dtos';
import { convertToResponse } from 'src/shared/formatter';
import { User, Payload } from 'src/shared/types';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
	  private readonly jwtService: JwtService,
	  private userService: UserService
  ) {}

    //may err if not return only token, err is not catched
	async login(body: LoginDto) : Promise<UserResponseDto> {
		const user = await this.userService.login(body);
        const payload: Payload = {
            email: user.email,
            role: user.role
        }
        return {
            ...convertToResponse(user),
        	access_token: this.jwtService.sign(payload, { expiresIn: '7d' })
        };     
	}
	
	async register(body: CreateUserDto): Promise<UserResponseDto>{
		const user = await this.userService.createUser(body);
        return convertToResponse(user);
	}

	async validateUser(payload: Payload) : Promise<User>{
		return await this.userService.findByPayload(payload);
	}
  
}
