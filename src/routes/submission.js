const express = require('express');
const router = express.Router();

const submissionController = require('../app/controllers/SubmissionController');

router.get('/:user_id/:problem_id', submissionController.show);

module.exports = router;
