const siteRouter = require('./site');
const sessionsRouter = require('./sessions');
const usersRouter = require('./users');
const authRouter = require('./auth');
const submissionRouter = require('./submission');
const problemsRouter = require('./problems');
const testcasesRouter = require('./testcases');
const problemLanguagesRouter = require('./problem_languages');
const languagesRouter = require('./languages');
const levelRouter = require('./levels');
const userProblemsRouter = require('./user_problems');
const semestersRouter = require('./semesters');
const subjectsRouter = require('./subjects');
const classesRouter = require('./classes');

function route(app) {
    app.use('/classes', classesRouter);
    app.use('/subjects', subjectsRouter);
    app.use('/semesters', semestersRouter);
    app.use('/levels', levelRouter);
    app.use('/languages', languagesRouter);
    app.use('/problem_languages', problemLanguagesRouter);
    app.use('/user_problems', userProblemsRouter);
    app.use('/testcases', testcasesRouter);
    app.use('/problems', problemsRouter);
    app.use('/submissions', submissionRouter);
    app.use('/auth', authRouter);
    app.use('/sessions', sessionsRouter);
    app.use('/users', usersRouter);
    app.use('/', siteRouter);
}

module.exports = route;
