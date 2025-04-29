import express from 'express'
const {Router} = express
export const recipeRoutes = Router()

recipeRoutes.get('/user/:id')
recipeRoutes.delete('/:id')
recipeRoutes.post('/')