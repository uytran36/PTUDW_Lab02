var express = require('express');

var controller = require('../controllers/phone.api.controller')

var router = express.Router();

router.get('/', controller.index);

module.exports = router;