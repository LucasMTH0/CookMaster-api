import { Schema } from "mongoose";
import { Favorite } from "../interfaces/favorite.js";

export const FavoriteSchema = new Schema<Favorite>({
    userID: String,
    recipeID: String
})