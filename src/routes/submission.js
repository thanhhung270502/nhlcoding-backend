const express = require('express');
const router = express.Router();

const submissionController = require('../app/controllers/SubmissionController');

router.post('/:language/code', submissionController.runCode);

module.exports = router;
