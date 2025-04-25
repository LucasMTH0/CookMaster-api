import { Request, Response } from "express";
import { RECIPE } from "../models/recipe.js";

export async function createRecipe(request: Request, response: Response){
    try {
        const recipe = request.body
        const newRecipe = new RECIPE(recipe) 
        await newRecipe.save()
        response.status(200).json({message: "Cadastro realizado com sucesso !"});
    } catch(error) {
        response.status(401).json({message: error.message})
    }
}

export async function listRecipes(request: Request, response: Response){
    try{
        const recipesList = await RECIPE.find()
        response.status(200).json(recipesList)
    } catch(error){
        response.status(501).json({message: error.message})
    }
}

export async function getRecipe(request: Request, response: Response){
    try {
        const {id} = request.params
        const foundRecipe = await RECIPE.findById(id)
        if(foundRecipe){
            response.status(200).json(foundRecipe)
        } else {
            response.status(404).json({message: "Receita não encontrada."})
        }
    } catch(error){
        response.status(401).json({message: error.message})
    }
}

export async function updateRecipe(request: Request, response: Response){

}