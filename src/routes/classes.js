const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');
const classesSerivce = require('../app/services/ClassesService');

router.post('/createExercise', verifyToken, classesSerivce.createExercise);
router.post('/createTopicProblems', verifyToken, classesSerivce.createTopicProblems);
router.post('/:slug/createTopic', verifyToken, classesSerivce.createTopicOfClass);
router.get('/:slug/participants', verifyToken, classesSerivce.getAllParticipantsInClass);
router.get('/:slug/subjectName', verifyToken, classesSerivce.getSubjectNameByClassID);
router.get('/me', verifyToken, classesSerivce.getAllClasses);
router.get('/:slug', verifyToken, classesSerivce.getAllProblemsByTopics);
router.put('/:slug', isAdmin, classesSerivce.update);
router.delete('/:slug', isAdmin, classesSerivce.delete);
router.post('/', isAdmin, classesSerivce.create);
router.get('/', classesSerivce.index);

module.exports = router;
