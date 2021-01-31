import { BadRequestException } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('v1')
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        exceptionFactory: (errors: ValidationError[]) => {
            const errorMessages = {};
            errors.forEach(error => {
                errorMessages[error.property] = (Object.values(error.constraints)).sort();
            });
            throw new BadRequestException(errorMessages);
        },
        stopAtFirstError: true
    }));
  await app.listen(3000);
}
bootstrap();
