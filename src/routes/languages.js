const express = require('express');
const languagesController = require('../app/controllers/LanguagesController');
const router = express.Router();

router.get('/:language_id', languagesController.show);

module.exports = router;
