import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import Mongoose from "mongoose";
import { config } from "../config/auth";
import { UserSchema } from "../models/userModel";

const User = Mongoose.model('User', UserSchema);

export const userLogin = (req, res) => {

    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.send(err)
        }

        if (!user) {
            res.json({ message: "The provided credentials do not match our records." })
            return
        }

        let comparePassword = compareSync(req.body.password, user.password)

        if (!comparePassword) {
            res.json({ message: "The provided credentials do not match our records." })
            return
        }

        let token = sign({ id: user._id }, config.secret, {
            expiresIn: config.jwtExpiration
        });

        res.json({
            id: user._id,
            email: user.email,
            accessToken: token,
        });
    });
}

export const userLogout = (req, res) => {
    
}