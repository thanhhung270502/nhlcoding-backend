const express = require('express');
const router = express.Router();

const testcasesController = require('../app/controllers/TestcasesController');

router.get('/:problem_id', testcasesController.show);
router.get('/', testcasesController.index);

module.exports = router;
