const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');
const classesSerivce = require('../app/services/ClassesService');

router.get('/', isAdmin, classesSerivce.index);
router.get('/me', verifyToken, classesSerivce.getAllClasses);
router.post('/', isAdmin, classesSerivce.create);
router.put('/:slug', isAdmin, classesSerivce.update);
router.delete('/:slug', isAdmin, classesSerivce.delete);

module.exports = router;
