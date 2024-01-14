const express = require('express');
const router = express.Router();

const sessionsService = require('../app/services/SessionsService');

router.post('/login', sessionsService.create);

module.exports = router;
