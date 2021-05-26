const router = require('express').Router();
const { Model } = require('sequelize');
const sequelize = require('../config/connection');
const { Event, User, Location } = require('../models');


router.get('/', (req, res) => {
    res.send('dashboard');
});

router.get('/')

module.exports = router;