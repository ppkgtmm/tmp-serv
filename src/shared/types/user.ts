export interface User {
    _id: string;
    email: string;
    password: string;
    role: string;
    access_token?: string;
}