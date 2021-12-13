const express = require('express');
const morganBody = require('morgan-body');
const routes = require('../api/routes');

module.exports = (app) => {
    app.use(express.json());
    morganBody(app);

    routes(app);
    app.get('/', (req, res, next) => {
        res.send('OK');
    });
    app.use((error, req, res, next) => {
        console.error('=== ERROR ===');
        console.error(error);
        const { status, msg } = error;
        res.status(status).json({
            status: 'fail',
            message: msg,
        });
    });
};
