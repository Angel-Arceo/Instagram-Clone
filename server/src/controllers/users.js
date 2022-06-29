const User = require('../models/users.js');
const bcrypt = require('bcrypt');

const getUsers = async (request, response) => {
    try {
        const users = await User.find({})

        response.status(200).json(users);
    }catch(e) {
        console.log(e)
    }
}

const getUser = async (request, response) => {
    const userId = request.params.id

    try {
        const user = await User.findById(userId);

        response.status(200).json(user)
    }catch(e) {
        console.log(e)
    }
}

const register = async (request, response) => {
    const { profile, username, name, password, followers, following, posts } = request.body;

    try {
        const newPassword = bcrypt.hashSync(password, 10)
        console.log(newPassword)

        const user = new User({
            profile, 
            username, 
            name, 
            password: newPassword, 
            followers, 
            following, 
            posts
        })

        const savedUser = await user.save();

        response.status(201).json(savedUser)
    }catch(e) {
        console.log(e)
    }
}

const deleteUser = async (request, response) => {
    const userId = request.params.id;

    try {
        await User.findByIdAndDelete(userId);

        response.status(200).send('User has been sucessfully deleted');
    }catch(e) {
        console.log(e);
    }
}

module.exports = { getUsers, getUser, register, deleteUser }