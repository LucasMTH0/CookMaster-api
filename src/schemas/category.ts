import { Schema } from "mongoose";
import { Category } from "../interfaces/category.js";

export const CategorySchema = new Schema<Category>({
    name: String
})