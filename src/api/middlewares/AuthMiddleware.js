const UserModel = require('../../models/UserModel');
const jsonwebtoken = require('jsonwebtoken');
const appError = require('../../utils/appError');
const {JWT} = require('../../config');

class AuthMiddleware{
    async checkAuth(req, res, next){
        const authorization = req.get('authorization');
        const throwError = new appError('Vui lòng đăng nhập !', 401);

        if (!authorization || !authorization.startsWith('Bearer')) return next(throwError);
        const token = authorization.split(' ')[1];
        try {

            const decodeToken = jsonwebtoken.decode(token, JWT.token);
            if (!decodeToken) return next(throwError);
            // console.log(decodeToken);

            res.locals.infoUser = await UserModel.findById(decodeToken.id).lean();
            next();
        }catch (e) {
            next(throwError);
        }
    }


}


module.exports = new AuthMiddleware();