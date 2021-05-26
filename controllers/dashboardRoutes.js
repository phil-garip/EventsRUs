const router = require('express').Router();
const sequelize = require('../config/connection');
const { Event, User, Location } = require('../models');


//GET all events
