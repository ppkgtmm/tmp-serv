import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(
	Strategy,
	'user'
) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.PRIVATE_KEY
		});
	}

	async validate(payload: any) {
		return {
			_id: payload._id,
			email: payload.email,
			role: payload.role
		};
	}
}