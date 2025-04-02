
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';

export async function initializeDatabase(){
    const uri = `mongodb+srv://lucas0matheus0:26561314Lucas@cookmaster.ki4sbga.mongodb.net/?retryWrites=true&w=majority&appName=CookMaster`;
    return await mongoose.connect(uri).then(() => {
        console.log("CookMaster is connected on Mongo Database")
    })
}
