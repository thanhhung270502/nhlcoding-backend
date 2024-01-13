const express = require('express');
const languagesService = require('../app/services/LanguagesService');
const router = express.Router();

/**
 * @swagger
 * /languages/{language_id}:
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
router.get('/:language_id', languagesService.show);
router.get('/', languagesService.index);

module.exports = router;
