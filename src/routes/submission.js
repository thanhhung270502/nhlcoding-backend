const express = require('express');
const router = express.Router();

const submissionService = require('../app/services/SubmissionService');
const { verifyToken, isAdmin, isTeacher } = require('../app/middlewares/authMiddlewares');

// router.put("/:id", submissionController.update);
// router.delete("/:id", submissionService.delete);

/**
 * @swagger
 * /submissions/create:
 *   post:
 *     summary: Create a new submission
 *     tags: [Submissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSubmissionRequest'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Response'
 *                 - $ref: '#/components/schemas/Id'
 *             example:
 *               message: Submission created successfully
 *               code: 201
 *               id: 1
 *       422:
 *         description: Unprocessable Entity
 *         content:
 *           appliation/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             example:
 *               message: Submission created failed
 *               code: 422
 *       500:
 *         description: Internal Server Error
 */
router.post('/create', submissionService.create);

/**
 * @swagger
 * /submissions/{user_id}/{problem_id}:
 *   get:
 *     summary: Retrieve submissions by user ID and problem ID
 *     tags: [Submissions]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *       - in: path
 *         name: problem_id
 *         required: true
 *         description: ID of the problem
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Response'
 *                 - properties:
 *                     body:
 *                       type: array
 *                       items:
 *                         allOf:
 *                           - $ref: '#/components/schemas/Id'
 *                           - $ref: '#/components/schemas/Submission'
 *       404:
 *         description: Submissions not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             example:
 *               message: Submissions not found
 *               code: 404
 *       500:
 *         description: Internal Server Error
 */
router.get('/:problem_id/me', verifyToken, submissionService.showMe);
router.get('/:user_id/:problem_id', submissionService.show);

/**
 * @swagger
 * /submissions:
 *   get:
 *     summary: Retrieve all submissions
 *     tags: [Submissions]
 *     description: Retrieve all submissions from the database.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 allOf:
 *                   - $ref: '#/components/schemas/Id'
 *                   - $ref: '#/components/schemas/Submission'
 *       500:
 *         description: Internal Server Error
 */
router.get('/', submissionService.showAll);

module.exports = router;
