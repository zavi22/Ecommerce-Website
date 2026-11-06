// Here we will create logic of user to create an account or login to the account.
import userModel from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    }
    catch {

    }
}

// Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //checking if user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        //validating email format & password length
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email format" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //creating new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        //If you don’t provide an id yourself, MongoDB (through Mongoose) generates one automatically and always names the field _id
        res.json({ success: true, token });
    }
    catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid admin credentials" });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export { loginUser, registerUser, adminLogin };