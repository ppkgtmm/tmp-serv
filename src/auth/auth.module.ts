import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
    }),
    JwtModule.register({
        secret: process.env.PRIVATE_KEY,
        signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, JwtStrategy, UserService],
  controllers: [AuthController]
})
export class AuthModule {}