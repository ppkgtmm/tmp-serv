import {
    BadRequestException,
    Inject,
    Injectable,
    UnauthorizedException
} from '@nestjs/common';
import { Db } from 'mongodb';
import { compare, hash } from 'bcrypt';
import { CreateUserDto, LoginDto, User as UserDto } from '../user/dtos';
import { convertToResponse } from '../common/formatter';
import { User } from '../common/dtos/user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('DATABASE_CONNECTION')
        private db: Db,
    ) { }

    async findOne(email: string): Promise<User>{
        return await this.db.collection('users').findOne({ email });
    }

    async createUser(body: CreateUserDto): Promise<UserDto> {
        let user: User = await this.findOne(body.email);
        if (user && user.email)
            throw new BadRequestException({ email: 'email already used' });
        
        let newUser = await (await this.db.collection('users').insertOne({
            ...body,
            password: await hash(body.password, 10),
            role: 'user',
        })).ops[0];
        
        return convertToResponse(newUser);
    }

    async login(body: LoginDto): Promise<User>{
        const user = await this.findOne(body.email);
        if (user && (await compare(body.password, user.password))) {
            return user
        } 
        throw new UnauthorizedException('invalid email or password');       
    }
}
