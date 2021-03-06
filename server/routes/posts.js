import express from 'express';
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
} from '../controllers/Posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
