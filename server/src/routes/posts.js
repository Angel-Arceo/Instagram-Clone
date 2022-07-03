const express = require('express')
const { getPosts, newPost, getPost, deletePost, editPost } = require('../controllers/posts.js')
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', newPost);
router.put('/:id', editPost)
router.delete('/:id', deletePost);

module.exports = router