import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
    id_user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    count_shared: { type: Number, default: 0 },
    count_like: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    deleted: Boolean,
})

export const Post = mongoose.model('Post', PostSchema)




