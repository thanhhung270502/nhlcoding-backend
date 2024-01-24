const express = require('express');
const router = express.Router();

const testcasesService = require('../app/services/TestcasesService');

/**
 * @swagger
 * /testcases/{problem_id}:
 *   get:
 *     summary: Get testcases for a problem
 *     tags: [Testcases]
 *     parameters:
 *       - in: path
 *         name: problem_id
 *         required: true
 *         description: ID of the problem
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Found testcases successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Response'
 *                 - properties:                
 *                     body:
 *                       type: object
 *                       properties:
 *                         testcases:
 *                           type: array
 *                           items:
 *                             allOf:
 *                               - $ref: '#/components/schemas/Id'
 *                               - $ref: '#/components/schemas/Testcase'
 *       '404':
 *         description: No testcases found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             example:
 *               message: No testcases found
 *               code: 404
 *       '500':
 *         description: Internal Server Error
 */
router.get('/:problem_id', testcasesService.show);

/**
 * @swagger
 * /testcases:
 *   get:
 *     summary: Get all testcases
 *     tags: [Testcases]
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 allOf:
 *                   - $ref: '#/components/schemas/Id'
 *                   - $ref: '#/components/schemas/Testcase'
 *       '500':
 *         description: Internal Server Error
 */
router.get('/', testcasesService.index);

module.exports = router;
