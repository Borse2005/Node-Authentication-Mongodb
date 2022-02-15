import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

export const UserSchema = new Schema({
    fullName: {
        type: String,
        required: "Fullname is required.."
    },
    email: {
        type: String,
        required: "Email is required.."
    },
    password: {
        type: String,
        required: "Password is required",
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});