const ActivityRoute = require('./ActivityRoute');
const AuthRoute = require('./AuthRoute');

module.exports = app => {
    app.use('/auth', AuthRoute);
    app.use('/activity', ActivityRoute);
};
