const express = require('express');
const morganBody = require('morgan-body');
const routes = require('../api/routes');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

const { SENTRY_URL } = require('../config');

module.exports = (app) => {
    app.use(express.json());

    Sentry.init({
        dsn: SENTRY_URL,
        integrations: [
            new Sentry.Integrations.Http({ tracing: true }),
            new Tracing.Integrations.Express({ app }),
        ],
        tracesSampleRate: 1.0,
    });

    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());

    morganBody(app);

    routes(app);

    app.use(Sentry.Handlers.errorHandler());
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
