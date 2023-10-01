const express = require('express');
const router = express.Router();

const sessionsController = require('../app/controllers/SessionsController');

router.post('/login', sessionsController.create);

module.exports = router;
