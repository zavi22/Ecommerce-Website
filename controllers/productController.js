import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        // Now we to store these images into database but we can't so for that we use cloudinary from there we will get url and we will store that URL in database.

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(images.map(async (image) => {
            let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
            return result.secure_url;
        }))

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,

            /* sizes is an array of strings but we are getting it as a string so we need to convert it into array 
            of strings. Like when user gives data it comes as string data e.g "["S", "M", "L"]" but we need it as 
            array of strings e.g ["S", "M", "L"] so we will use JSON.parse() to convert it into array of strings. 
            */

            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now()
        }

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" })

    } catch (err) {
        res.json({ success: false, message: "Error while adding product", error: err.message })
    }
}

// function for list products
const listProducts = async (req, res) => {
        try{

            const products = await productModel.find({})
            res.json({success: true, products})

        }catch(err){
            res.json({success: false, message: "Error while fetching products", error: err.message})
        }
}

// function for remove product
const removeProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Product removed successfully" })
    }catch(err){
        res.json({ success: false, message: "Error while removing product", error: err.message })
    }
}

// function for single product
const singleProduct = async (req, res) => {
    try{
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success: true, product})
    }catch(err){
        res.json({success: false, message: "Error while fetching product", error: err.message})
    }
}

export { listProducts, addProduct, removeProduct, singleProduct }