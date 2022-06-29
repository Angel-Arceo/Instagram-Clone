const express = require('express')
const { getUsers, register, deleteUser, getUser } = require('../controllers/users.js')
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser)
router.post('/', register);
router.delete('/delete/:id', deleteUser);

module.exports = router