const express = require('express');
const router = express.Router();

const testcasesService = require('../app/services/TestcasesService');

router.get('/:problem_id', testcasesService.show);
router.get('/', testcasesService.index);

module.exports = router;
