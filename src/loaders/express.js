const express = require('express');
const routes = require('../api/routes');

module.exports = app => {
    app.use(express.json());
    routes(app);
    app.use((error, req, res, next) => {
        const {status, msg} = error;
        res.status(status).json({
            status: 'fail',
            message: msg
        })
    })

};