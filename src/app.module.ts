import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.dev.env'
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
