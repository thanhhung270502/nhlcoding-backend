const express = require('express');
const levelController = require('../app/controllers/LevelController');
const router = express.Router();

router.get('/:level_id', levelController.show);
router.get('/', levelController.index);

module.exports = router;
