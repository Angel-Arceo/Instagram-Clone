const User = require('../models/user.js');

const addFollower = async (request, response, next) => {
    const { userId } = request.body
    
    const user = await User.findById(request.id);

    try {
        const newFollower = user.followers.concat(userId)
        user.followers = newFollower;

        await user.save();

        response.status(201).json(user);
    }catch(err) {
        next(err);
    }
}

const deleteFollower = async (request, response, next) => {
    const user = await User.findById(request.id);

    const follower = user.followers.findIndex(user => user._id == request.params.id)

    try {
        user.followers.splice(1, follower);

        user.followers = [...user.followers];

        await user.save();

        response.status(200).send('Follower has beeen deleted.');
    }catch(err) {
        next(err);
    }
}

module.exports = { addFollower, deleteFollower }