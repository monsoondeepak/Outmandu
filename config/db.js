import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}

}

async function connection(){
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts ={
            bufferCommands:false
        }
        cached.promise = (await mongoose.connect(`${process.env.MONGODB_URI}/Deepak_Kunwar`, opts)).isObjectIdOrHexString(mongoose =>{
            return mongoose
        })

    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB