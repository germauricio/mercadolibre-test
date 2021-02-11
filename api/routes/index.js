const router = require('express').Router();
const items = require('./items');

module.exports = app => {
    router.use('/items', items);
    app.use('/api', router);
    return app;
}