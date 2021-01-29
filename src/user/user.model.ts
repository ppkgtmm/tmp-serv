import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [8, 'password should be at least 8 characters']
    },
    role: {
        type: String,
        default: 'user'
    },
    token: {
        type: String
    }
});

export interface User extends mongoose.Document {
    _id: string;
    email: string;
    password: string;
    role: string;
    token: string;
}