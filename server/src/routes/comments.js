const express = require('express')
const { getComments, newComment, deleteComment, editComment } = require('../controllers/comments.js')
const router = express.Router();

router.get('/', getComments);
router.post('/', newComment);
router.put('/:id', editComment)
router.delete('/:id', deleteComment);

module.exports = router