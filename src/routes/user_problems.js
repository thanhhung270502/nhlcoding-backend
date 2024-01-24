const express = require('express')
const UserProblemsService = require('../app/services/UserProblemsService')
const router = express.Router();

/**
 * @swagger
 * /user_problems/{user_id}/{problem_id}:
 *   post:
 *     summary: Insert a user problem
 *     tags: [User Problems]
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *             example:
 *               status: Todo
 *     responses:
 *       '201':
 *         description: UserProblem modified successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             example:
 *               message: UserProblem modified successfully
 *               code: 201
 *       '500':
 *         description: Internal Server Error
 */
router.post('/:user_id/:problem_id', UserProblemsService.insertUserProblem);

module.exports = router