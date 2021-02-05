import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";

@Catch()
export class ErrorFilter implements ExceptionFilter{
    catch(error: Error, host: ArgumentsHost) {
        console.log(error.stack);
        let response: Response = host.switchToHttp().getResponse();
        let status: number = (error instanceof HttpException) ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string | object = (error instanceof HttpException) ? error.getResponse() : 'some error ocurred';
        return response.status(status).json({
            error: message
        })
    }

}