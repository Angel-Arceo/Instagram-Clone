const express = require('express')
const { getFollowers, addFollower, newFollower, deleteFollower } = require('../controllers/followers.js')
const { verifyToken } = require('../services/verifyToken.js');
const router = express.Router();

router.get('/', getFollowers);
router.post('/', verifyToken, newFollower);
router.post('/follow/', verifyToken, addFollower);
router.delete('/:id', verifyToken, deleteFollower);

module.exports = router