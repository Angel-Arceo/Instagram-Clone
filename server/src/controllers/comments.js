const Comments = require('../models/comments.js');

const getComments = async (request, response, next) => {
    try {
        const comments = await Comments.find({})

        response.status(200).json(comments)
    }catch(e){
        next(e)
    }
}

const newComment = async (request, response, next) => {
    const { content, likes, dislikes, post, user } = request.body;

    try {

        const comment = new Comment({
            content,
            likes,
            dislikes,
            post,
            user
        })

        const savedComment = await comment.save();

        response.status(201).json(savedComment)
    }catch(e) {
        next(e)
    }
}

const editComment = async (request, response, next) => {
    const commentId = request.params.id;

    try {
        const updatedComment = await Comment.findByIdAndUpdate(commentId, { $set: request.body }, { new: true });
        
        response.status(200).json(updatedComment);
    }catch(e) {
        next(e)
    }
}

const deleteComment = async (request, response, next) => {
    const commentId = request.params.id;

    try {
        await Comment.findByIdAndDelete(commentId);

        response.status(200).send('Comment has been sucessfully deleted');
    }catch(e) {
        next(e)
    }
}

module.exports = { getComments, newComment, deleteComment, editComment }