const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    photo: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: { 
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
})

const Post = model('Post', PostSchema)

module.exports = Post;