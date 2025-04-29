import { Request, Response } from "express";
import { CATEGORY } from "../models/category.js";

export async function create(request: Request, response: Response){
    try {    
        const category = request.body;
        const newCategory = new CATEGORY(category);
        await newCategory.save()
        response.status(200).json({message:"Categoria criada com sucesso!"})
    } catch(error){
        response.status(400).json({ message: error.message })
    }
}