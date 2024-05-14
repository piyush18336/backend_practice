// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
// import express from "express";
import connect_db from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

connect_db();
/*
const app = express();
( async function connectDB(){
    try{
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    }catch(error){
        console.log("Error",error);
        throw new error
    }

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on the port ${process.env.PORT}`)
    })
})()
*/