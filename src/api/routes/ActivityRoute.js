const {Router} = require('express');

const ActivityController = require('../controllers/ActivityController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();

router.get('/', AuthMiddleware.checkAuth, ActivityController.get);

router.put('/', AuthMiddleware.checkAuth, ActivityController.update);

module.exports = router;