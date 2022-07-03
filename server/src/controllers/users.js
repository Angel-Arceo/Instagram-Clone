const User = require('../models/users.js');
const { createError } = require('../services/createError.js');
const bcrypt = require('bcrypt');

const getUsers = async (request, response, next) => {
    try {
        const users = await User.find({}).populate('posts',  { user: 0 }).populate('comments', { user: 0 })

        response.status(200).json(users);
    }catch(e) {
        next(e)
    }
}

const getUser = async (request, response, next) => {
    const userId = request.params.id

    try {
        const user = await User.findById(userId).populate('posts', {
            user: 0,
        }).populate('comments', {
            user: 0,
        });

        response.status(200).json(user)
    }catch(e) {
        next(e)
    }
}

const register = async (request, response, next) => {
    const { profile, username, name, password, followers, following, posts, comments } = request.body;

    const newPassword = bcrypt.hashSync(password, 10)

    if(!username) {
        return next(createError(400, 'No username'));
    }

    const user = new User({
        profile, 
        username, 
        name, 
        password: newPassword, 
        followers, 
        following, 
        posts,
        comments
    })

    try {

        const savedUser = await user.save();

        response.status(201).json(savedUser)
    }catch(e) {
        next(e);
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

module.exports = { getUsers, getUser, register, deleteUser }