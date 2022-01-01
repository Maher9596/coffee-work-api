import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    wifi: String,
    charger: String,
    people: String,
    name: String,
    convinience: String
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage