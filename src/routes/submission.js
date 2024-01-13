const express = require('express');
const router = express.Router();

const submissionService = require('../app/services/SubmissionService');

// router.put("/:id", submissionController.update);
router.delete("/:id", submissionService.delete);
router.post("/create", submissionService.create);
router.get("/:user_id/:problem_id", submissionService.show);
router.get("/", submissionService.showAll);

module.exports = router;
