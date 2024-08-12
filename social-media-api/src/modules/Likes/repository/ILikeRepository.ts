import mongoose, { Schema } from "mongoose";

const LikeSchema = new mongoose.Schema({
    id_user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    id_post: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
})

export const Like = mongoose.model('Like', LikeSchema)