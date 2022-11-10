import mongoose from 'mongoose';



const ProductSchema = mongoose.Schema({
    title:String,
    price:String,
    image:String
})



export default mongoose.model("Product",ProductSchema);