const ActivityRoute = require('./activity.route');
const AuthRoute = require('./auth.route');

module.exports = app => {
    app.use('/auth', AuthRoute);
    app.use('/activity', ActivityRoute);
};
