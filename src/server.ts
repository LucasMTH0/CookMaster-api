import express  from 'express'
import { initializeDatabase } from './database.js'
import { recipeRoutes } from './routes/recipe.js'

const app = express()

initializeDatabase()

app.use('/recipe', recipeRoutes)

app.listen('3009', () => {
    console.log("Hello World!")
})