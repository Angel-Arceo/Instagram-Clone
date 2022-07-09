const express = require('express')
const { getFollowers, addFollower, newFollower, deleteFollower } = require('../controllers/followers.js')
const router = express.Router();

router.get('/', getFollowers);
router.post('/', newFollower);
router.post('/follow/:id', addFollower);
router.delete('/:id', deleteFollower);

module.exports = router