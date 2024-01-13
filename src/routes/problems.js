const express = require('express');
const router = express.Router();

const problemsService = require('../app/services/ProblemsService');

router.get('/:user_id/:level/:status/:search', problemsService.getProblemsForFilter);
// router.get('/:user_id/:limit/:offset/', problemsService.getAllProblems);
router.post('/:problem_id/:language/run', problemsService.runCode);
router.post('/:problem_id/:language/runMore', problemsService.runMoreTestcases);
router.post('/:problem_id/:language/run-jobe', problemsService.runCodeWithJobe);
router.get('/:problem_id', problemsService.getProblemById);
// router.post('/test-jobe', problemsService.testJobe);
router.post('/', problemsService.create);
router.get('/', problemsService.index);

module.exports = router;
