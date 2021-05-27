const sequelize = require('../config/connection');
const router = require('express').Router();
const { User, Event, Location } = require('../models');

//LOGIN ROUTE
router.get('/', (req, res) => {
  res.render('login');
});

//PROFILE CREATE ROUTE
router.get('/profileCreate', (req,res) => {
  res.render('profileCreate');
  });

//GET CREATE EVENT PAGE
router.get('/eventCreate', (req, res) => {
  res.render('eventCreate');
});

// GET DASHBOARD
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
});

//GET SAVED EVENTS PAGE
router.get('/saved-events', (req, res) => {
  res.render('my-events');
});

//GET PROFILE PAGE
router.get('/profile', (req, res) => {
  Event.findAll({
          include: [
            { attributes: ['date', 'title', 'location'] },
              {
                  model: User,
                  attributes: ['username']
              }
          ]
      })
      .then(dbEventData => {
          const events = dbEventData.map(event => event.get({ plain: true }));
          res.render('profile', { events });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


module.exports = router;
  
