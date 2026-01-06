const express = require('express');
const router = express.Router();

router.use('/tasks', require('./task.routes'));
router.use('/users', require('./user.routes'));
router.use('/projects', require('./project.routes'));
router.use('/comments', require('./comment.routes'));

module.exports = router;