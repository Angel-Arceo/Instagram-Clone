const { Schema, model } = require('mongoose');

const FollowerSchema = new Schema({
    follower: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Follower = model('Follower', FollowerSchema)

module.exports = Follower;
