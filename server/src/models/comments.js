const { Schema, model } = require('mongoose');

const CommentsSchema = new Schema({
    content: String,
    likes: Number,
    dislikes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Comments = model('Comments', CommentsSchema)

module.exports = Comments;