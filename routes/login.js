const express = require('express');
const router = express.Router();

const loginController = require('../middleware/auth.js');

router.post('/', loginController.getToken);

module.exports = router;