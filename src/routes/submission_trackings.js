const express = require('express');
const router = express.Router();

const submissionTrackingService = require('../app/services/SubmissionTrackingService');
const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');

router.post('/:problem_id/:language/:submission_trackings_id/run', verifyToken, submissionTrackingService.runCode);
router.post('/:submission_trackings_id/submit', verifyToken, submissionTrackingService.submitCode);
router.get('/:slug/all', verifyToken, submissionTrackingService.showAllInfo);
router.get('/', submissionTrackingService.index);
router.post('/', verifyToken, submissionTrackingService.create);

module.exports = router;
