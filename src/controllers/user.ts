import { User } from "../interfaces/user.js";
import { Request, Response } from "express";
import { USER } from "../models/user.js";
import { checkUserPasswordToDatabaseEncryptedPassword, generateEncryptPassword } from "../services/bcrypt.js";

export async function register(request: Request, response: Response){
    try {
        const user = request.body
        const encryptPassword = await generateEncryptPassword(user.password)
        console.log("password: ", encryptPassword)
        const newUser = new USER({name: user.name, email: user.email, password: encryptPassword})
        await newUser.save()
        response.status(200).json({message: "Cadastro realizado com sucesso !"});
    } catch(error){
        response.status(401).json({message: error.message})
    }
}

async function get(user: User){
    const userFound = await USER.findOne({ email: user.email })
    if(userFound && 
    await checkUserPasswordToDatabaseEncryptedPassword(user.password as string, userFound.password as string) ){
        return {id: userFound.id, name: userFound.name, email: userFound.email};
    }
    return null;

}

export async function login(request: Request, response: Response){
    const user = request.body;
    const userFound = await get(user);
    if(userFound){
        response.status(200).json({ user: userFound })
    } else {
        response.status(400).json({ message: 'E-mail ou senha incorretos.'})
    }
}

