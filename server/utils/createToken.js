import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const createToken = (_id,category,email,isAdmin,photo) => {

    dotenv.config();
    const token = jwt.sign({_id,category,email,isAdmin,photo}, process.env.SECRET_KEY, {expiresIn: '48h'});
    return token;
};