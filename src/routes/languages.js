const express = require('express');
const languagesService = require('../app/services/LanguagesService');
const router = express.Router();

/**
 * @swagger
 * /languages:
 *  get:
 *      summary: Get a list of all languages
 *      tags: [Languages]
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Language'
 *          500:
 *              description: Internal Server Error                          
 *                  
 */
router.get('/', languagesService.index);

/**
 * @swagger
 * /languages/{language_id}:
 *  get:
 *      summary: Get a specific language by ID
 *      tags: [Languages]
 *      parameters:
 *          - in: path
 *            name: language_id
 *            required: true
 *            schema:
 *              type: integer
 *            description: ID of the language to retrieve
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          allOf: 
 *                            - $ref: '#/components/schemas/Response'
 *                            - properties:
 *                                body:
 *                                   $ref: '#/components/schemas/Language'    
 *          500:
 *              description: Internal Server Error                                        
 */
router.get('/:language_id', languagesService.show);

module.exports = router;
