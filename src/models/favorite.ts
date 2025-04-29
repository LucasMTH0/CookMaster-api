import mongoose from "mongoose";
import { Favorite } from "../interfaces/favorite.js";
import { FavoriteSchema } from "../schemas/favorite.js";

export const FAVORITE = mongoose.model<Favorite>('favorite', FavoriteSchema)