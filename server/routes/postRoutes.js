import express from "express";
import { getAllPosts, createPost, getPostById } from "../controller/postController";

const router = express.Router();

//get all posts
router.get('/getAllPosts', getAllPosts);

//create new post
router.post('/createPost', createPost);

//get post by id
router.get('/post/:id', getPostById);


export default router;