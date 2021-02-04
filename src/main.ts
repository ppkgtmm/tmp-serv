import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { exceptionFactory } from './exception';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('v1')
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        exceptionFactory
    }));
  await app.listen(3000);
}
bootstrap();
