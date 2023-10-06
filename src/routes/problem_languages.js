const express = require('express');
const problem_languagesController = require('../app/controllers/Problem_languagesController');
const router = express.Router();

router.get('/:problem_id/:language_id', problem_languagesController.getByProblemIDLanguageID);
router.get('/:problem_id', problem_languagesController.getByProblemID);

module.exports = router;
