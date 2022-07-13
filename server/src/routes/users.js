const express = require('express')
const { getUsers, deleteUser, getUser } = require('../controllers/users.js');
const { verifyToken } = require('../services/verifyToken.js'); 
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser)
router.delete('/', verifyToken, deleteUser);

module.exports = router