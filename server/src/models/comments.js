const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    content: String,
    likes: Number,
    dislikes: Number,
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Comment = model('Comment', CommentSchema)

module.exports = Comment;