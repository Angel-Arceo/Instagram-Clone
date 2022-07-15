const User = require('../models/user.js');

const addFollowing = async (request, response, next) => {
    const { userId } = request.body
    
    const user = await User.findById(request.id);

    try {
        const newUser = user.following.concat(userId)
        user.following = newUser;

        await user.save();

        response.status(201).json(user);
    }catch(err) {
        next(err);
    }
}

const deleteFollowing = async (request, response, next) => {
    const user = await User.findById(request.id);

    const follow = user.following.findIndex(user => user._id == request.params.id)

    try {
        user.following.splice(1, follow)

        user.following = [...user.following]

        await user.save();

        response.status(200).send('User has beeen deleted.');
    }catch(err) {
        next(err);
    }
}

module.exports = { addFollowing, deleteFollowing };