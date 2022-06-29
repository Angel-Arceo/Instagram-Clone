const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    followers: Number,
    following: Number,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

const User = model('User', UserSchema)

module.exports = User;