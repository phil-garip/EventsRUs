const router = require('express').Router();
const sequelize = require('../config/connection');
const { Event, User, Location } = require('../models');


//GET all events
router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll();
        res.status(200).json(eventData);
    }
})