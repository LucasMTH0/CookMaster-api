import { Request, Response } from "express";
import { FAVORITE } from "../models/favorite.js";

export async function create(request: Request, response: Response){
    const favorite = request.body;
    const newFavorite = new FAVORITE(favorite)
    await newFavorite.save()
    response.status(200).json({ message: "Receita adicionada aos favoritos."})
}