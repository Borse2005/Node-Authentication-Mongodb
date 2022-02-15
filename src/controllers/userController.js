import bcrypt from "bcryptjs/dist/bcrypt";
import Mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const User = Mongoose.model('User', UserSchema);

// Add new user 
export const addNewUser = (req, res) => {
    let newUser = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
    });

    newUser.save((err, user) => {
        if(err){
            res.send(err)
        }
        res.json(user)
    });
}

//Get all user
export const getUser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    });
}

// Get user with id 
export const getUserWithId = (req, res) => {
    User.findById(req.params.userID, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user);
    });
}

//Update user with specific user
export const updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.userID }, req.body, { new: true, useFindAndModify:false }, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}

//Delete user with specific user
export const deleteuser = (req, res) => {
    User.remove({ _id: req.params.userID}, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "Successfully deleted user" });
    });
}