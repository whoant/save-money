const express = require('express');
const routes = require('../api/routes');

const morgan = require('morgan')

module.exports = app => {
    app.use(express.json());
    app.use(morgan("dev"));
    routes(app);
    app.get('/', (req, res, next) => {
        res.send('OK');
    });
    app.use((error, req, res, next) => {
        const {status, msg} = error;
        res.status(status).json({
            status: 'fail',
            message: msg
        })
    })

};