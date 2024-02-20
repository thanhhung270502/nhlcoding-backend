const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');
const classesSerivce = require('../app/services/ClassesService');

router.get('/me', verifyToken, classesSerivce.getAllClasses);
router.get('/:slug', verifyToken, classesSerivce.getAllProblemsByTopics);
router.put('/:slug', isAdmin, classesSerivce.update);
router.delete('/:slug', isAdmin, classesSerivce.delete);
router.post('/', isAdmin, classesSerivce.create);
router.get('/', isAdmin, classesSerivce.index);

module.exports = router;
