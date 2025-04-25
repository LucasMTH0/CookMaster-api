import { Schema } from "mongoose";
import {User} from '../interfaces/user.js';

export const UserSchema = new Schema<User>({
    name: String,
    email: String,
    password: String
})