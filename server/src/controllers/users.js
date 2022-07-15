const User = require('../models/user.js');
const { createError } = require('../services/createError.js');
const bcrypt = require('bcrypt');

const getUsers = async (request, response, next) => {
    try {
        const users = await User.find({}).populate('posts',  {
            user: 0 
        }).populate('comments', { 
            user: 0 
        }).populate('followers')
        .populate('following')

        response.status(200).json(users);
    }catch(e) {
        next(e)
    }
}

const getUser = async (request, response, next) => {
    const userId = request.params.id

    if(!userId) {
        return next(createError(204, 'No userId'))
    }

    try {
        const user = await User.findById(userId).populate('posts', {
            user: 0,
        }).populate('comments', {
            user: 0,
        }).populate('followers').populate('following');

        response.status(200).json(user)
    }catch(e) {
        next(e)
    }
}

const deleteUser = async (request, response, next) => {
    const userId = request.params.id;

    try {
        await User.findByIdAndDelete(userId);

        response.status(200).send('User has been sucessfully deleted');
    }catch(e) {
        next(e);
    }
}

module.exports = { getUsers, getUser, deleteUser }