import app from "./app";
import mongoose from "mongoose";

const mongoURI = 'mongodb://localhost:27017/backend-ts';

mongoose.connect(mongoURI).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000, ()=> {
        console.log("server running on port 3k")
    })
}).catch(err=> {
    console.error("db connection error:", err)
})