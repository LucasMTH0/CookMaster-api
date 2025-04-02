import express from 'express'
import { createRecipe, getRecipe, listRecipes } from '../controllers/recipe.js'

const {Router} = express
export const recipeRoutes = Router()

recipeRoutes.get('/', listRecipes)
recipeRoutes.get('/:id', getRecipe)
recipeRoutes.post('/new', createRecipe)
recipeRoutes.put('/edit/:id', )