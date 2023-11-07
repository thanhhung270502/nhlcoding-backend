const express = require('express');
const router = express.Router();

const problemsController = require('../app/controllers/ProblemsController');

router.get('/:user_id/:limit/:offset/:level/:status', problemsController.getProblemsForFilter);
// router.get('/:user_id/:limit/:offset/', problemsController.getAllProblems);
router.post('/:problem_id/:language/run', problemsController.runCode);
router.post('/:problem_id/:language/runMore', problemsController.runMoreTestcases);
router.post('/:problem_id/:language/run-jobe', problemsController.runCodeWithJobe);
router.post('/test-jobe', problemsController.testJobe);
router.post('/', problemsController.create);
router.get('/', problemsController.index);

module.exports = router;
