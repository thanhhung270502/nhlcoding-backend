const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');
const subjectsService = require('../app/services/SubjectsService');

router.get('/', isAdmin, subjectsService.index);
router.post('/', isAdmin, subjectsService.create);
router.put('/:slug', isAdmin, subjectsService.update);
router.delete('/:slug', isAdmin, subjectsService.delete);

module.exports = router;
