import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connect_db = async () => {
    try{
       const connectionInstance =   await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`mongodb connected !! DB host: ${connectionInstance.connection.host}`)
    }catch(error){
        console.log(`monogdb connection error ${error}`)
        process.exit(1);
    }
}

export default connect_db;