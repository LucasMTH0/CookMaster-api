import { Schema } from "mongoose";
import { Recipe } from "../interfaces/recipe.js";

export const RecipeSchema = new Schema<Recipe>({
    name: String,
    category: String,
    description: String,
    ingredients: { type: [String] },
    prepare: { type: [String] },
    image: String,
    videoTutorial: String,
    idCreator: String,
    createdAt: Date
})