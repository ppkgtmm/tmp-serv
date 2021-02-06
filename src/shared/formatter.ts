import { User } from './types/user';
import { UserResponseDto } from '../shared/dtos';

export function convertToResponse(user: User) : UserResponseDto {
    const { _id, email, access_token } = user;
    return {
        _id,
        email,
        access_token: access_token || undefined
    }
}