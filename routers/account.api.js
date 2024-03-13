const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account.controllers');
const authController = require('../controllers/auth.controllers');

router.post('/',  authController.authenticate, accountController.createAccount);
router.get('/', authController.authenticate, accountController.getAccount);
router.put('/:id', authController.authenticate, accountController.updateAccount);
router.delete('/:id',  authController.authenticate, accountController.deleteAccount);

module.exports = router;