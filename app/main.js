import express from 'express';
import "dotenv/config";

const app = express();
app.use(express.json());



app.get("/",(request,response)=>{
    response.send("My first API")
})


app.listen(5000,()=>{
    console.log(`server is runnin on port 5000`)
})