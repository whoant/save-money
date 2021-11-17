const {Router} = require('express');

const ActivityController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router.all('/*', AuthMiddleware.checkAuth);



router.post('/activity', ActivityController.getMyActivity);

// router.post('/login', ActivityController.postLogin);

module.exports = router;