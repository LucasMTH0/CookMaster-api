import express from 'express'
import { login, register } from '../controllers/user.js'


const {Router} = express
export const userRoutes = Router()

userRoutes.post('/login', login)
userRoutes.post('/register', register)
