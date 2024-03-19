const express = require('express');
const router = express.Router();

const submissionTrackingService = require('../app/services/SubmissionTrackingService');
const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');

router.get('/:slug/all', verifyToken, submissionTrackingService.showAllInfo);
router.get('/', verifyToken, submissionTrackingService.index);
router.post('/', verifyToken, submissionTrackingService.create);

module.exports = router;
