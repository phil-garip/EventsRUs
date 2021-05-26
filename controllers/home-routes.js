const router = require('express').Router();
const { User, Event, Location } = require('../models');

// GET all user events
router.get('/events', async (req, res) => {
  try {
    const eventData = await Event.findAll({
      include: [
        {
          model: Location,
          // attributes: ['name'],
        },
      ],
    });

    const events = eventData.map((event) =>
      event.get({ plain: true })
    );
    res.render('events', {
      events,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// POST new events
router.post('/newEvents', async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});
// PUT to update created events
// router.put()
//DELETE to delete events
router.delete('/:id', async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//HOME PAGE
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;
  