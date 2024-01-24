const express = require('express');
const problemLanguagesService = require('../app/services/ProblemLanguagesService');
const router = express.Router();

/**
 * @swagger
 * /problem_languages/{problem_id}/{language_id}:
 *  get:
 *      summary: Get specific code by problem ID and language ID
 *      tags: [Problem Languages]
 *      parameters:
 *          - in: path
 *            name: problem_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: ID of the problem
 *          - in: path
 *            name: language_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: ID of the language
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          allOf:
 *                              - $ref: '#/components/schemas/Response'
 *                              - properties:
 *                                  body:
 *                                      allOf:
 *                                          - $ref: '#/components/schemas/Id'
 *                                          - $ref: '#/components/schemas/ProblemLanguage'                              
 */
router.get('/:problem_id/:language_id', problemLanguagesService.getByProblemIDLanguageID);

/**
 * @swagger
 * /problem_languages/{problem_id}:
 *  get:
 *      summary: Get a list of code by problem ID
 *      tags: [Problem Languages]
 *      parameters:
 *          - in: path
 *            name: problem_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: ID of the problem
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          allOf:
 *                              - $ref: '#/components/schemas/Response'
 *                              - properties:
 *                                  body:
 *                                      type: array
 *                                      items:
 *                                          allOf:
 *                                              - $ref: '#/components/schemas/Id'             
 *                                              - $ref: '#/components/schemas/ProblemLanguage'              
 */
router.get('/:problem_id', problemLanguagesService.getByProblemID);

/**
 * @swagger
 * /problem_languages:
 *  get:
 *      summary: Get a list of all code
 *      tags: [Problem Languages]
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/Id'
 *                                  - $ref: '#/components/schemas/ProblemLanguage'                
 */
router.get('/', problemLanguagesService.index);

module.exports = router;
