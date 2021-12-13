const { Router } = require('express');

const AuthController = require('../controllers/auth.controller');

const router = Router();

router.post('/register', AuthController.postRegister);

router.post('/login', AuthController.postLogin);

module.exports = router;
