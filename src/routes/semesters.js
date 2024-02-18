const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');
const semesterService = require('../app/services/SemesterService');

router.get('/', isAdmin, semesterService.index);

module.exports = router;
