const Following = require('../models/following.js');
const User = require('../models/user.js');
const { createError } = require('../services/createError.js');


const getFollows = async (request, response, next) => {
    try {
        const following = await Following.find({}).populate('following')

        response.status(200).json(following);
    }catch(e) {
        next(e);
    }
}

const newFollow = async (request, response, next) => {
    const { following } = request.body;

    const newFollow = new Following({
        following
    });

    try {

        const savedFollow = await newFollow.save();

        response.status(201).json(savedFollow)
    }catch(e) {
        next(e);
    }
}

const addFollow = async (request, response, next) => {
    const userId = await User.findById(request.params.id);
    
    if(!userId) {
        return next(createError(404, 'User not found.'))
    }

    const { user } = request.body

    try {
        const follow = await Following.findById(userId.follow[1])

        const newFollow = follow.following.concat(user);
        follow.following = newFollow

        await follow.save();

        response.status(201).send('Follow has been added!.');

    }catch(err) {
        next(err);
    }
}

const deleteFollow = async (request, response, next) => {
    const followId = request.params.id;

    try {
        await Following.findByIdAndDelete(followId);

        response.status(200).send('Follow has been sucessfully deleted');
    }catch(e) {
        next(e);
    }
}

module.exports = { getFollows, addFollow, newFollow, deleteFollow };