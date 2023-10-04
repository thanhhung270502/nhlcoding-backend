const siteRouter = require('./site');
const sessionsRouter = require('./sessions');
const usersRouter = require('./users');
const authRouter = require('./auth');
const submissionRouter = require('./submission');
const problemsRouter = require('./problems');
const testcasesRouter = require('./testcases');

function route(app) {
    app.use('/testcases', testcasesRouter);
    app.use('/problems', problemsRouter);
    app.use('/submissions', submissionRouter);
    app.use('/auth', authRouter);
    app.use('/sessions', sessionsRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;
