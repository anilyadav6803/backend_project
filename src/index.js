import('dotenv').then(dotenv => dotenv.config({ path: './env' }));

import mongoose, { connect } from "mongoose";
import connectDb from './db/index.js'
import { DB_NAME } from "./constants.js";



connectDb()


/*
import express from 'express';

const app = express;

(async ()=>{
  try{
     mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
     app.on("error",()  => {
        console.log("Error:",error);
        throw error
     })

     app.listen(process.env.PORT,()=>{
        console.log(`App is lisstening on port ${PORT}`);
     })
  }catch(e){
     console.error("Error.happping ,  ",error)
     throw error 
  }
})()
*/