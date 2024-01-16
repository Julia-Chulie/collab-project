import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./router/UserRouter.js";
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

mongoose.connect(process.env.MONGO_DB, {

 }).then(init).catch((err) => {
    console.log('erssr',err);
 });

 async function init(){

    app.listen(PORT, () => {
      console.log(`Serveur lancé sur le ${PORT} général`);
    });
}