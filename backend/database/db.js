
import dotenv from 'dotenv';


import mongoose from "mongoose";
 

const Connection = async () => {
     
    try {
        await mongoose.connect(process.env.Mongo_Url);
        console.log('Database is Successfully Connected to server !!!')        
    } catch (error) {
        console.log("Error Occuered.....") ; 
    }
}

export default Connection ;

