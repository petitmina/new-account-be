const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const authController = require('../controllers/auth.controllers');

router.post('/', userController.createUser);
router.get('/me', authController.authenticate, userController.getUser)

module.exports = router;