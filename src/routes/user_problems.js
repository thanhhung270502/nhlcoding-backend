const express = require('express')
const UserProblemsController = require('../app/controllers/UserProblemsController')
const router = express.Router();

router.post('/:user_id/:problem_id', UserProblemsController.insertUserProblem);

module.exports = router