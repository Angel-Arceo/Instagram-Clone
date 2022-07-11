const User = require('../models/user.js');
const { createError } = require('../services/createError.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const register = async (request, response, next) => {
    const { profile, username, name, password, follow, posts, comments } = request.body;

    const newPassword = bcrypt.hashSync(password, 10)

    if(!username) {
        return next(createError(400, 'No username'));
    }

    const user = new User({
        profile, 
        username, 
        name, 
        password: newPassword, 
        follow, 
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

const login = async (request, response, next) => {
    const { username, password } = request.body;

    const user = await User.findOne({ username: username })
    
    const passwordCorrect = await bcrypt.compare(password, user.password);

    if(!(user && passwordCorrect)) {
        return next(createError(400, 'invalid username or password'));
    }

    try {
        const userForToken = {
            username: user.username,
            id: user._id
        }

        const token = jwt.sign(userForToken, process.env.SECRET)

        response.status(200).json({
            token: token,
            username: user.username,
            name: user.name
        });


    }catch(e) {
        next(e);
    }
}

module.exports = { register, login };