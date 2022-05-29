import Post from '../models/post.js';

export const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ success: false, err });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ success: false, err });
    }
};

export const updatePost = async (req, res) => {
    const allowedOptions = ['title', 'content', 'tags', 'author'];
    const selectedOption = Object.keys(req.body);
    const doesExists = selectedOption.every((opt) => allowedOptions.includes(opt));

    if (!doesExists) {
        return res.status(404).json({ success: false });
    }

    try {
        const post = await Post.findById({ _id: req.params.id });
        selectedOption.forEach((opt) => post[opt] = req.body[opt]);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ success: false, err });
    }
};

export const deletePost = async (req, res) => {
    try {
        await Post.findOneAndDelete({ _id: req.params.id });
        res.status(200).json('Post was deleted');
    } catch (err) {
        res.status(404).json({ success: false, err });
    }
};
