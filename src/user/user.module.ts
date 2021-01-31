import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserSchema } from './user.model';
import { DatabaseModule } from '../database/database.module';

@Module({
  // imports: [
  //   MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])
  // ],
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
