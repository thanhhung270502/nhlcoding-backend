const express = require('express')
const UserProblemsService = require('../app/services/UserProblemsService')
const router = express.Router();

router.post('/:user_id/:problem_id', UserProblemsService.insertUserProblem);

module.exports = router