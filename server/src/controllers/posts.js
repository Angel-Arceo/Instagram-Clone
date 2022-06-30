const Post = require('../models/posts.js');

const getPosts = async (request, response, next) => {
    try {
        const posts = await Post.find({})

        response.status(200).json(posts)
    }catch(e){
        next(e)
    }
}

const getPost = async (request, response, next) => {
    const postId = request.params.id

    try {
        const post = await Post.findById(postId);

        response.status(200).json(post)
    }catch(e) {
        next(e)
    }
}

const newPost = async (request, response, next) => {
    const { photo, title, content, likes, user, comments } = request.body;

    try {

        const post = new Post({
            photo,
            title,
            content, 
            likes,
            user,
            comments
        })

        const savedPost = await post.save();

        response.status(201).json(savedPost)
    }catch(e) {
        next(e)
    }
}

const editPost = async (request, response, next) => {
    const postId = request.params.id;

    try {
        const updatedHotel = await Post.findByIdAndUpdate(postId, { $set: request.body }, { new: true });
        
        response.status(200).json(updatedHotel);
    }catch(e) {
        next(e)
    }
}

const deletePost = async (request, response, next) => {
    const postId = request.params.id;

    try {
        await Post.findByIdAndDelete(postId);

        response.status(200).send('Post has been sucessfully deleted');
    }catch(e) {
        next(e)
    }
}

module.exports = { getPosts, newPost, getPost, deletePost, editPost }