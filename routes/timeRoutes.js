const express = require('express');
const timeController = require('../controllers/timeController');

const router = express.Router(); 


router.get('/7', timeController.time_7_createList);

router.get('/15', timeController.time_15_createList);

module.exports = router;