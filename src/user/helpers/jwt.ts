import { sign, verify } from 'jsonwebtoken';
import { promisify } from 'util';
import { User } from '../../common/dtos/user.dto';
import { getSeconds } from './time';

export async function generateToken(user: User) {
    let promiseSign = promisify(sign);
    return await promiseSign({
        email: user.email,
        audience: 'shopper',
        iat: getSeconds(),
        exp: getSeconds(60 * 60 * 24 * 7),
    }, process.env.PRIVATE_KEY);
}

export async function validateToken(user: User) {
    // if (!user.token)
    //     return await generateToken(user);
    // let promiseVerify = promisify(verify);
    // let decoded = await promiseVerify(user.token, process.env.PRIVATE_KEY);
    
}