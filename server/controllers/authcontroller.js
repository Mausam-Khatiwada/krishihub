import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    console.log("Registering user:", req.body);
    const {name, email, password, role} = req.body;
    try{
        // Check if user already exists
        const userExists = await User.findOne({email});
        if(userExists) return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({name, email, password:hashedPassword, role})
        await user.save();
        res.status(201).json({message: "User registered successfully"});

        
    }
    catch(error){
        console.error("Error registering user:", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({message: "Invalid email or password"});

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) return res.status(400).json({message: "Invalid email or password"});

        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.json({
            token,
            user:{
                id: user._id,
                name: user.name,
                role: user.role,
            }
        })
    }
    catch(error){
        console.error("Error logging in user:", error);
        res.status(500).json({message: "Internal server error"});
    }
}