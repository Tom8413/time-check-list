const express = require('express');
const timeController = require('../controllers/timeController');
const EmpployeeTimeList = require('../models/workersList');

const router = express.Router(); 


router.get('/07', timeController.time_7_createList);

router.get('/015', timeController.time_15_createList);

router.get('/all-data', (req, res) => {
    EmpployeeTimeList.find().then((result) => {
        res.json(result);
    }).catch((err) => {
        conslo.log(err);
    })
})

module.exports = router;