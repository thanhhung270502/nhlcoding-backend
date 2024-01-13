const express = require('express');
const router = express.Router();

const usersService = require('../app/services/UsersService');

router.get('/:slug', usersService.show);
router.post('/', usersService.create);
router.get('/', usersService.index);

module.exports = router;
