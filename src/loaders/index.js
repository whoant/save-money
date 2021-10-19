const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

module.exports = app => {
    mongooseLoader();
    expressLoader(app);
};