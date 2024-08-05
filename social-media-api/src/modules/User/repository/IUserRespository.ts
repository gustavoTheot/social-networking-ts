import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    reference_photo: { type: String, default: '' },
    name: String,
    email: { type: String, unique: true },
    password: String,
    nick_name: { type: String, unique: true },
    id_followers: Number,
    followers: Number,
    id_following: Number,
    following: Number,
    createdAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
})


export const User = mongoose.model('User', UserSchema)