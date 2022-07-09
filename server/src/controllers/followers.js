const Follower = require('../models/follower.js');
const User = require('../models/user.js');
const { createError } = require('../services/createError.js');

const getFollowers = async (request, response, next) => {
    try {
        const followers = await Follower.find({}).populate('follower')

        response.status(200).json(followers);
    }catch(e) {
        next(e);
    }
}

const newFollower = async (request, response, next) => {
    const { follower } = request.body;

    const newFollower = new Follower({
        follower
    });

    try {

        const savedFollower = await newFollower.save();

        response.status(201).json(savedFollower)
    }catch(e) {
        next(e);
    }
}

const addFollower = async (request, response, next) => {
    const userId = await User.findById(request.params.id);

    if(!userId) {
        return next(createError(404, 'User not found.'))
    }
    
    const { user } = request.body;

    try {
        const follower = await Follower.findById(userId.follow[0])

        const newFollower = follower.follower.concat(user);
        follower.follower = newFollower;

        await follower.save();

        response.status(201).send('Follower has been added!.')
    }catch(err) {
        next(err);
    }
}

const deleteFollower = async (request, response, next) => {
    const followerId = request.params.id;

    try {
        await Follower.findByIdAndDelete(followerId);

        response.status(200).send('Follower has been sucessfully deleted');
    }catch(e) {
        next(e);
    }
}

module.exports = { getFollowers, addFollower, newFollower, deleteFollower }