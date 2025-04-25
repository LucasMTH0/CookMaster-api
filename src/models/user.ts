import mongoose from "mongoose";
import { User } from "../interfaces/user.js";
import { UserSchema } from "../schemas/user.js";

export const USER = mongoose.model<User>('User', UserSchema)