import mongoose from "mongoose";

let isConnected=false; //track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery');

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected=true;
        console.log('MondoDB Connected')
    }catch(error){
        console.log(error);
    }
}
