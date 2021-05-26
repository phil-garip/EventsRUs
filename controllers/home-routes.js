const router = require('express').Router();
const { User, Event, Location } = require('../models');

// GET all user events

// POST new events

// PUT to update created events

//DELETE to delete events

//LOGIN ROUTE
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;
  