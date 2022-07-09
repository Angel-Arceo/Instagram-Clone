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
    follow: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Follower'
        },
        {
            type: Schema.Types.ObjectId,
            ref: 'Following'
        }
    ],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
    }]
})

const User = model('User', UserSchema)

module.exports = User;