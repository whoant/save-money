const {Router} = require('express');

const ActivityController = require('../controllers/activity.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', AuthMiddleware.checkAuth, ActivityController.get);

router.put('/', AuthMiddleware.checkAuth, ActivityController.update);

module.exports = router;