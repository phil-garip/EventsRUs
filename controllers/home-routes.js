const sequelize = require('../config/connection');
const router = require('express').Router();
const { User, Event, Location } = require('../models');

//LOGIN ROUTE
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;


// GET all user events

// POST new events

// PUT to update created events

//DELETE to delete events

