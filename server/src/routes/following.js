const express = require('express')
const { getFollows, addFollow, newFollow, deleteFollow } = require('../controllers/following.js')
const router = express.Router();

router.get('/', getFollows);
router.post('/', newFollow);
router.post('/follow/:id', addFollow)
router.delete('/:id', deleteFollow);

module.exports = router