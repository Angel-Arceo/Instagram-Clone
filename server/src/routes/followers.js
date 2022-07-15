const express = require('express')
const { addFollower, deleteFollower } = require('../controllers/followers.js')
const { verifyToken } = require('../services/verifyToken.js');
const router = express.Router();

router.post('/', verifyToken, addFollower);
router.delete('/:id', verifyToken, deleteFollower);

module.exports = router