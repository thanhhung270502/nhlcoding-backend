const express = require('express');
const router = express.Router();

const submissionController = require('../app/controllers/SubmissionController');

// router.put("/:id", submissionController.update);
router.delete("/:id", submissionController.delete);
router.post("/create", submissionController.create);
router.get("/:user_id/:problem_id", submissionController.show);
router.get("/", submissionController.showAll);

module.exports = router;
