const express = require('express');
const levelService = require('../app/services/LevelService');
const router = express.Router();

router.get('/:level_id', levelService.show);
router.get('/', levelService.index);

module.exports = router;
