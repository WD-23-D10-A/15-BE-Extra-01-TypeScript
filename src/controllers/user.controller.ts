import { Request, Response } from "express";
import User, {UserInt} from "../models/user.model";

// create new user
export const createUser = async (req: Request, res: Response):Promise<Response> => {
    try {
        const {name, email, password} = req.body;

        const newUser: UserInt = new User({name, email, password});

        await newUser.save();

        return res.status(200).json(newUser);
    } catch (err) {
        return res.status(500).json({message: "Internal server error"})
    }
}

// get all user

export const getUsers = async(req: Request, res: Response):Promise<Response> => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({message: "Internal server error"})
    }
}