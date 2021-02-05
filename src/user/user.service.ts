import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { hash, compare } from 'bcrypt';
import { SignUpDto } from '../user/dtos/signup.dto';
import { removeProps } from '../utils';

@Injectable()
export class UserService {
    constructor(
        @Inject('DATABASE_CONNECTION')
        private db: Db,
    ) { }
    
    async signup(body: SignUpDto): Promise<object>{
        let user = await this.db.collection('users').findOne(
            { email: body.email },
            { projection: { email: 1 } }
        );
        if (user && user.email) throw new BadRequestException({ email: 'email already used' });
        body.password = await hash(body.password, 10);
        let newUser = await (await this.db.collection('users').insertOne({
            ...body,
            role: 'user',
        })).ops[0];
        return removeProps(newUser, ['role', 'password']);
    }
}
