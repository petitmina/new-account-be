const express = require('express');
const router = express.Router();
const userApi = require('./user.api');
const authApi = require('./auth.api');
const accountApi = require('./account.api');

router.use('/user', userApi);
router.use('/auth', authApi);
router.use('/account', accountApi);

module.exports = router;