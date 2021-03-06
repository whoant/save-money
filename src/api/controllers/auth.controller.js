const UserModel = require('../../models/user.model');
const jsonwebtoken = require('jsonwebtoken');
const { JWT } = require('../../config');

const appError = require('../../utils/appError');
const hash256 = require("../../utils/sha256");

class AuthController {
    async postRegister(req, res, next) {
        const { user, pass, fullName } = req.body;
        try {
            if (!user || !pass || !fullName) {
                return next(new appError({}, 'Vui lòng nhập đầy đủ thông tin !', 500));
            }

            const check = await UserModel.findOne({ user });

            if (check) return next(new appError({}, 'Tài khoản của bạn đã tồn tại !', 500));
            const encryptPassword = hash256(pass);
            const newDoc = new UserModel({ user, pass: encryptPassword, fullName });
            await newDoc.save();

            res.json({
                status: 'success',
                message: 'Tạo tài khoản thành công !',
            });
        } catch (e) {
            next(new appError(e, 'Đã xãy ra lỗi trong quá trình đăng ký!', 500));
        }
    }

    async postLogin(req, res, next) {
        const { user, pass } = req.body;

        if (!user || !pass) {
            return next(new appError({}, 'Vui lòng nhập thông tin đăng nhập !', 500));
        }

        try {
            const infoUser = await UserModel.findOne({ user, pass });
            if (!infoUser) {
                throw new appError({}, 'Tài khoản hoặc mật khẩu không chính xác !', 500)
            }

            const token = await jsonwebtoken.sign({ id: infoUser._id }, JWT.token, {
                expiresIn: JWT.expires,
            });

            res.json({
                status: 'success',
                message: 'Đăng nhập thành công !',
                fullName: infoUser.fullName,
                token,
                time: infoUser.time,
                activities: infoUser.activities,
            });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();
