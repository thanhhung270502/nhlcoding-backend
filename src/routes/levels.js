const express = require('express');
const levelService = require('../app/services/LevelService');
const router = express.Router();

/**
 * @swagger
 * /levels:
 *   get:
 *     summary: Get a list of all levels
 *     tags: [Levels]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Level'
 *       500:
 *         description: Internal Server Error 
*/
router.get('/', levelService.index);

/**
 * @swagger
 * /levels/{level_id}:
 *   get:
 *     summary: Get a specific level by ID
 *     tags: [Levels]
 *     parameters:
 *       - in: path
 *         name: level_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the level to retrieve
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
 *                        $ref: '#/components/schemas/Language'
 *       500:
 *         description: Internal Server Error                             
 */
router.get('/:level_id', levelService.show);

module.exports = router;
