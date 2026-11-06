import jwt from "jsonwebtoken";

const adminAuth = async(req, res, next) => {
    try{
        const token = req.headers
        if(!token){
            return res.json({success: false, message: "No token provided"})
        }
    }catch(err){
        res.json({success: false, message: "Error while authenticating admin", error: err.message})
    }
}