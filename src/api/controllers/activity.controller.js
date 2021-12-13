const UserModel = require('../../models/user.model');
const appError = require('../../utils/appError');

class ActivityController {
    get(req, res, next) {
        try {
            const { infoUser } = res.locals;

            res.json({
                status: 'success',
                message: 'Đồng bộ dữ liệu thành công !',
                activities: infoUser.activities,
                time: infoUser.time,
            });
        } catch (e) {
            next(new appError(e, 'Có lỗi trong quá trình đồng bộ !', 500));
        }
    }

    async update(req, res, next) {
        try {
            const { data, time } = req.body;
            const { infoUser } = res.locals;
            const statusUpdate = await UserModel.findByIdAndUpdate(infoUser._id, {
                activities: data,
                time,
            });

            res.json({
                status: 'success',
                message: 'Đồng bộ dữ liệu thành công !',
            });
        } catch (e) {
            next(new appError(e, 'Có lỗi trong quá trình cập nhập !', 500));
        }
    }
}

module.exports = new ActivityController();
