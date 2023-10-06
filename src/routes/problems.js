const express = require('express');
const router = express.Router();

const problemsController = require('../app/controllers/ProblemsController');

// router.post('/:problem_id/:language/run', problemsController.runTestCases);
router.post('/:problem_id/:language/runMore', problemsController.runMoreTestcases);

module.exports = router;
