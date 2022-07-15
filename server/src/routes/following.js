const express = require('express')
const { verifyToken }  = require('../services/verifyToken.js');
const { addFollowing, deleteFollowing } = require('../controllers/following.js')
const router = express.Router();

router.post('/', verifyToken, addFollowing)
router.delete('/:id', verifyToken, deleteFollowing);

module.exports = router