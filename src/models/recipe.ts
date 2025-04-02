import mongoose from 'mongoose';
import { Recipe } from '../interfaces/recipe.js';
import { RecipeSchema } from '../schemas/recipe.js';

export const RECIPE = mongoose.model<Recipe>('Recipe', RecipeSchema)