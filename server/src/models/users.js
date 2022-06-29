const { Schema } = require('mongoose');
const mongoose = require('moongose');

const UserSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
})

const User = UserSchema.model('User', UserSchema)

module.exports = User;