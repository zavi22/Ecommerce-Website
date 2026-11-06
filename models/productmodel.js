import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

// Schema is a structure that is used to make data in the database.

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    bestSeller: {
        type: Boolean,
    },
    date: {
        type: Number,
        required: true,
    },
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

// we only need one model for the product, so we are checking if the model already exists or not. If it exists, we will use that model. If it doesn't exist, we will create a new model.

export default productModel;