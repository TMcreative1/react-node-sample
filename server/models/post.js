import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    article: String,
}, { timestamps: true });

const Post = mongoose.model('post', postSchema);

export default Post;
