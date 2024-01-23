const express = require('express');
const router = express.Router();

const problemsService = require('../app/services/ProblemsService');

// router.get('/:user_id/:limit/:offset/', problemsService.getAllProblems);
// router.post('/:problem_id/:language/run', problemsService.runCode);
// router.post('/:problem_id/:language/runMore', problemsService.runMoreTestcases);

/**
 * @swagger
 * /problems/{user_id}/{level}/{status}/{search}:
 *   get:
 *     summary: Retrieve a list of filtered problems
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         description: ID of the user
 *         schema:
 *           type: string
 *       - in: path
 *         name: level
 *         description: Name of the level
 *         schema:
 *           type: string
 *       - in: path
 *         name: status
 *         description: Status of user problems
 *         schema:
 *           type: string
 *       - in: path
 *         name: search
 *         description: Search key word
 *         schema:
 *           type: string
 *     responses:
 *       '200':
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
 *                          type: object
 *                          properties:
 *                            id: 
 *                               type: integer
 *                            title: 
 *                               type: string
 *                            description: 
 *                               type: string
 *                            name: 
 *                               type: string
 *                            status: 
 *                               type: string
 *                            user_id: 
 *                               type: integer
 *               example:
 *                  message: Get problems successfully
 *                  code: 200
 *                  body:
 *                      - id: 1
 *                        title: Add Two Numbers
 *                        description: Problem Description
 *                        name: Easy
 *                        status: Todo
 *                        user_id: 1
 *                          
 *       '500':
 *         description: Internal Server Error
 */
router.get('/:user_id/:level/:status/:search', problemsService.getProblemsForFilter);

/**
 * @swagger
 * /problems/{problem_id}/{language}/run-jobe:
 *   post:
 *     summary: Run code with Jobe for a specific problem and language
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: problem_id
 *         schema:
 *           type: integer
 *         description: The ID of the problem
 *       - in: path
 *         name: language
 *         schema:
 *           type: string
 *         description: The language of the code (e.g., python, cpp)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The code to run
 *             example:
 *               code: "print('Hello, World!')"
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/Response'
 *                   - properties:
 *                       body:
 *                         type: object
 *                         properties:
 *                           status:
 *                             type: string
 *                           compile_info:
 *                             type: string
 *                           avg_runtime:
 *                             type: number
 *                             format: float
 *                           result:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 testcase:
 *                                   type: integer
 *                                   description: The index of the testcase
 *                                 success:
 *                                   type: boolean
 *                                 output:
 *                                   type: string
 *                                 error:
 *                                   type: string
 *                           wrong_testcase:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: integer
 *                               input:
 *                                 type: string
 *                               output:
 *                                 type: string
 *                               actual_output:
 *                                 type: string
 *             example:
 *               message: Run code successfully
 *               code: 200
 *               body:
 *                 status: Accepted
 *                 compile_info: ""
 *                 avg_runtime: 50.2
 *                 result:
 *                   - testcase: 0
 *                     success: true
 *                     output: "Hello, World!"
 *                     error: ""
 *                   - testcase: 1
 *                     success: true
 *                     output: "2"
 *                     error: ""
 *                 wrong_testcase:
 *                   id: 3
 *                   input: "3"
 *                   output: "9"
 *                   actual_output: "27"
 *       '500':
 *         description: Internal Server Error
 */
router.post('/:problem_id/:language/run-jobe', problemsService.runCodeWithJobe);

/**
 * @swagger
 * /problems/{problem_id}:
 *   get:
 *     summary: Retrieve problem by ID
 *     tags: [Problems]
 *     parameters:
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
 *                       allOf:
 *                           - $ref: '#/components/schemas/Id'
 *                           - $ref: '#/components/schemas/ExtendedProblem'
 *       404:
 *         description: Problem not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             example:
 *               message: Problem not found
 *               code: 404             
 *       500:
 *         description: Internal Server Error
 */
router.get('/:problem_id', problemsService.getProblemById);

/**
 * @swagger
 * /problems:
 *   post:
 *     summary: Create a new problem
 *     tags: [Problems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProblemRequest'
 *     responses:
 *       '201':
 *         description: Problem created successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Response'
 *                 - $ref: '#/components/schemas/Id'
 *             example:
 *               message: Problem created successfully
 *               code: 201
 *               id: 1
 *       '422':
 *         description: Problem creation failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             example:
 *               message: Problem created failed
 *               code: 422
 *       '500':
 *         description: Internal Server Error
 */
router.post('/', problemsService.create);

/**
 * @swagger
 * /problems:
 *   get:
 *     summary: Retrieve all problems
 *     tags: [Problems]
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  allOf:
 *                    - $ref: '#/components/schemas/Id'
 *                    - $ref: '#/components/schemas/Problem'
 *       '500':
 *         description: Internal Server Error
 */
router.get('/', problemsService.index);

module.exports = router;
