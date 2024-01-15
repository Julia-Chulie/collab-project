import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8001;

const app = express();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(init).catch((err) => {
    console.log('erssr',err);
 })

 async function init(){

    app.listen(PORT, () => {
       console.log(`Serveur lancé sur le ${PORT} général`);
    })
}