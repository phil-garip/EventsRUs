const sequelize = require('../config/connection');
const router = require('express').Router();
const { User, Event, Location } = require('../models');
const { route } = require('./api');

//LOGIN ROUTE
router.get('/', (req, res) => {
  res.render('login');
});

router.get('/', (req, res) => {
  res.render('logout');
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
// router.get('/dashboard', (req, res) => {
//   res.render('dashboard')
// });

//GET SAVED EVENTS PAGE
router.get('/saved-events', (req, res) => {
  res.render('my-events');
});

// router.get('/profile', (req, res) => {
//   res.render('profile');
// })

//GET PROFILE PAGE
router.get('/profile', (req, res) => {
  Event.findAll({
          where: {
            user_id: req.session.userId
          },
          // include: [
          //   { 
          //     // attributes: ['date', 'title', 'location'],
          //     model: User,
          //         // attributes: ['username']
          //   }
          // ]
      })
      .then(dbEventData => {
          const events = dbEventData.map(event => event.get({ plain: true }));
          res.render('profile', { events });
          // res.json(events)
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/dashboard', async (req, res) => {
  try {
    const dbEventData = await Event.findAll({
    });

    const events = dbEventData.map((event) =>
      event.get({ plain: true })
    );
    res.render('dashboard', {
      events,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
  
