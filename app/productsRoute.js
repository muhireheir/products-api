import express from "express";
import ProductModel from './models/Product';
import  multer from 'multer';





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'app/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
  })
const upload = multer({ storage: storage });



const router = express.Router();


router.get("/", async(req,res)=>{

    const products =  await ProductModel.find();
    res.send(products);
});



router.post("/",upload.single('image'),(req,res)=>{


    console.log(req.file);
    const product = new ProductModel({
        title:req.body.title,
        price:req.body.price,
        image:req.file.filename
    });

    product.save();

    res.send(product);

});
export default router;