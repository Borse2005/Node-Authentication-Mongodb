import Mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const User = Mongoose.model('User', UserSchema);

export const emailVerify = (req, res, next) => {
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.send(err);
            return
        }

        if (user) {
            res.json({ message: 'Email has been already registered..' });
            return
        }
        
        next();
    });
}