import  mongoose  from "mongoose";
import dotenv from 'dotenv'


dotenv.config();
export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"MERN_STRACK_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(()=>{
        console.log("Connected to Database!")
    }).catch((err)=>{
        console.log(`Some error occured while connecting to database:${err}`)
    })
}