import mongoose from "mongoose";
import { Category } from "../interfaces/category.js";
import { CategorySchema } from "../schemas/category.js";

export const CATEGORY = mongoose.model<Category>('category', CategorySchema)