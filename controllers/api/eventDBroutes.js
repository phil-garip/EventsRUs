const router = require('express').Router();
const { Event } = require('../../models');


//GET ALL EVENTS
router.get('/', async (req, res) => {
    Event.findAll()
      .then(eventData => {
          res.json(eventData);
      })
      .catch(err => {
          res.json(err)
      })
    
    try {
        const eventData = await Event.findAll();
        return res.json(eventData);
    } catch (err) {
        return res.status(500)
    }
});


//CREATE NEW EVENT
router.post('/', async (req, res) => {
    try {
        const dbEventData = await Event.create({
            title: req.body.title,
            description: req.body.description,
            date_id: req.body.date_id,
            location_name: req.body.location_name,
            user_id: req.session.userId
        });
        

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbEventData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//DELETE EVENT BY ID
router.delete('/:id', (req, res) => {
    Event.destroy({
        where: {
            id: req.params.id
        }
    }) .then(dbEventData => {
        if (!dbEventData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbEventData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

module.exports = router;