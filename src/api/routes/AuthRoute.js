const {Router} = require('express');

const AuthController = require('../controllers/AuthController');

const router = Router();

router.post('/register', AuthController.postRegister);

router.post('/login', AuthController.postLogin);

module.exports = router;