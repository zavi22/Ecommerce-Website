import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cardData: {
        type: Object,
        default: {},

        // Reason why we set it to default {} is bcz if a user didn't add any card data, it will by default set it to empty object.
    },

},{minimize: false});

// minimize: false is used bcz by default mongoose has a feature that it reject null value so we off that fucntion.

const userModel = mongoose.models.user || mongoose.model("user", productSchema);

export default userModel;