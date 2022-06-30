const { Schema, model } = require('mongoose');

const CommentsSchema = new Schema({
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

const Comments = model('Comments', CommentsSchema)

module.exports = Comments;