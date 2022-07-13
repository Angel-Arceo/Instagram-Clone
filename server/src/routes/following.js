const express = require('express')
const { verifyToken }  = require('../services/verifyToken.js');
const { getFollows, addFollow, newFollow, deleteFollow } = require('../controllers/following.js')
const router = express.Router();

router.get('/', getFollows);
router.post('/', verifyToken, newFollow);
router.post('/follow/', verifyToken, addFollow)
router.delete('/:id', verifyToken, deleteFollow);

module.exports = router