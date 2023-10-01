const siteRouter = require('./site');
const sessionsRouter = require('./sessions');
const usersRouter = require('./users');
const authRouter = require('./auth');
const submissionRouter = require('./submission');

function route(app) {
    app.use('/submissions', submissionRouter);
    app.use('/auth', authRouter);
    app.use('/sessions', sessionsRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;
