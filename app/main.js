import express from 'express';
import productsRoutes from './productsRoute';
import mongoose from 'mongoose';
import path from 'path';
import "dotenv/config";


const app = express();


app.use(express.json());




app.use('/assets', express.static(path.join(__dirname, 'uploads')))


app.get("/",(request,response)=>{
    response.send("My first API")
})

app.use("/products",productsRoutes);





const databseUrl = process.env.DATABASE_URL;
mongoose.connect(databseUrl,{ useNewUrlParser: true }).then(()=>{
    app.listen(5000,()=>{
        console.log(`server is runnin on port 5000`)
    })
});