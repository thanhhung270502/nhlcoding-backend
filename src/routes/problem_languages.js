const express = require('express');
const problemLanguagesService = require('../app/services/ProblemLanguagesService');
const router = express.Router();

/**
 * @swagger
 * /problem_languages/{problem_id}/{language_id}:
 *  get:
 *      summary: Returns the language with language_id
 *      tags: [Languages]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: int
 *            required: true
 *            description: The language id
 *      responses:
 *          200:
 *              description: The language object
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Language'
 *                  
 */
router.get('/:problem_id/:language_id', problemLanguagesService.getByProblemIDLanguageID);
router.get('/:problem_id', problemLanguagesService.getByProblemID);
router.get('/', problemLanguagesService.index);

module.exports = router;
