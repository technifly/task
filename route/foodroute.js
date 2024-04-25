const express = require('express');
const findPrice = require('../controller/foodcontroller');


const router = express.Router();

router.post('/pricing' , findPrice)

module.exports = router;