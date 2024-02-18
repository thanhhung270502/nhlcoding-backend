const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');
const semesterService = require('../app/services/SemesterService');

router.get('/', isAdmin, semesterService.index);
router.post('/', isAdmin, semesterService.create);
router.put('/:slug', isAdmin, semesterService.update);
router.delete('/:slug', isAdmin, semesterService.delete);

module.exports = router;
