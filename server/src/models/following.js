const { Schema, model } = require('mongoose');

const FollowingSchema = new Schema({
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Following = model('Following', FollowingSchema)

module.exports = Following;