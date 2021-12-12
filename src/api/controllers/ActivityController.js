const UserModel = require('../../models/UserModel');
const appError = require('../../utils/appError');

class ActivityController {
    get(req, res, next) {

    }

    async update(req, res, next) {
        try {

            const {data, time} = req.body;
            const {infoUser} = res.locals;
            console.log(time);
            const statusUpdate = await UserModel.findByIdAndUpdate(infoUser._id, {
                activities: data,
                time,
            });

            res.json({
                status: 'success',
                message: 'Đồng bộ dữ liệu thành công !',
            });

        } catch (e) {
            next(new appError('Có lỗi trong quá trình cập nhập !', 500));

        }
    }


}

module.exports = new ActivityController();