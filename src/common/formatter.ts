import { User } from './dtos/user.dto';
import { User as ResponseDto } from '../user/dtos';

export function convertToResponse(user: User) : ResponseDto {
    const { _id, email, token } = user;
    return {
        _id,
        email,
        token
    }
}