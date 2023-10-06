const siteRouter = require('./site');
const sessionsRouter = require('./sessions');
const usersRouter = require('./users');
const authRouter = require('./auth');
const submissionRouter = require('./submission');
const problemsRouter = require('./problems');
const testcasesRouter = require('./testcases');
const problem_languagesRouter = require('./problem_languages');
const languagesRouter = require('./languages');

function route(app) {
    app.use('/languages', languagesRouter);
    app.use('/problem_languages', problem_languagesRouter);
    app.use('/testcases', testcasesRouter);
    app.use('/problems', problemsRouter);
    app.use('/submissions', submissionRouter);
    app.use('/auth', authRouter);
    app.use('/sessions', sessionsRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;
