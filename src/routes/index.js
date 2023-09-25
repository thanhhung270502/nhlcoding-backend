const siteRouter = require('./site');
const sessionsRouter = require('./sessions');
const usersRouter = require('./users');

function route(app) {
    app.use('/sessions', sessionsRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;
