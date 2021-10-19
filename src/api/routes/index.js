const UserRoute = require('./UserRoute');
const AuthRoute = require('./AuthRoute');

module.exports = app => {
    app.use('/auth', AuthRoute);
    app.use('/user', UserRoute);
};
