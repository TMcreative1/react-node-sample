import axios from "axios";
import config from "../config/config";

const postUrl = config.server.url() + '/posts';

export const createPost = (post) => axios.post(postUrl, post);
export const getPosts = () => axios.get(postUrl);
export const updatePost = (id, post) => axios.put(`${postUrl}/${id}`, post);
export const deletePost = (id) => axios.delete(`${postUrl}/${id}`);