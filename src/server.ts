import express  from 'express'
import cors from 'cors'
import { initializeDatabase } from './database.js'
import { recipeRoutes } from './routes/recipe.js'
import { userRoutes } from './routes/user.js'

const app = express()
initializeDatabase()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/user', userRoutes)
app.use('/recipe', recipeRoutes)


app.listen('3009', () => {
    console.log("Open in http://localhost:3009")
})