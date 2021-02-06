import {
    IsEmail,
    IsMongoId,
    IsNotEmpty,
    IsOptional,
    IsString
} from "class-validator";

export class User {
    @IsMongoId()
    @IsEmail()
    _id: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    token?: string;
}