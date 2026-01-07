const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/login', require('../controllers/login.controller').login);

router.use('/tasks', authMiddleware, require('./task.routes'));
router.use('/users', require('./user.routes'));
router.use('/projects', authMiddleware, require('./project.routes'));
router.use('/comments', authMiddleware, require('./comment.routes'));

module.exports = router;