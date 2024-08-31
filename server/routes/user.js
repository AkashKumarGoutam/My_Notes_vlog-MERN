import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router();
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';



// this code to signup
router.post('/signup' , async (req, res)=>{
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ status: false, message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        return res.json({ status: true, message: "User registered successfully" });
    }
    
    catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }

})
// ///////////////////////////////end Signup///////////////////////////////////////////

// start SignIn code
router.post('/signin', async (req,res)=>{
    const {email , password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.json({message: "User is not registerd"})
    }

    const validPassword = await bcryt.compare(password , user.password)
    if(!validPassword){
        return res.json({message : "password is Incorrect"})
    }

    const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: "1h"})
    res.cookie('token', token, {httpOnly: true , maxAge: 36000000})
    return res.json({status: true , message: 'login successfully'})
})

/////////end Signin//////////////////////////////////////////////////

//////////set logOut route and functionality/////////////////////////
 
        ////verifyUser middleware///////
    const verifyUser = async (req,res,next)=>{
        try{
            const token = req.cookies.token;
            if(!token){
                return res.json({status: false , message:"no token available"})
            }
            const decoded = await jwt.verify(token , process.env.KEY);
            next();
            }
            catch(err){
                return res.json(err);
            }
    }
///////////set route with middleware (verifyUser)///////
router.get('/verify' , verifyUser , (req,res)=>{
    return res.json({status:true , message:"authorized"})
})

////logout clear token///
router.get("/logout" , (req, res)=>{
    res.clearCookie('token')
    return res.json({status : true})
})


////////////end Logout/////////////////////////////////////////////////////
export {router as UserRouter}
