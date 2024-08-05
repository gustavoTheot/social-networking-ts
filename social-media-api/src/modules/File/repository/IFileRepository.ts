import mongoose, { Schema } from "mongoose";

const FilePostSchema = new mongoose.Schema({
    id_post: { type: Schema.Types.ObjectId, ref: 'Post' },
    reference: String,
    name: String,
    size: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
})

export const File = mongoose.model('File', FilePostSchema)
