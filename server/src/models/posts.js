const { Schema } = require('mongoose');
const mongoose = require('moongose');

const PostSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
    title: String,
    content: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = PostSchema.model('Post', PostSchema)

module.exports = Post;