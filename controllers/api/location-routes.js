const router = require('express').Router();
const { Location, Event, User } = require('../../models');

// GET ALL LOCATIONS WITH THEIR EVENTS

router.get('/', (req, res) => {
    Location.findAll({
        attributes: 
        [
            'id', 'name'
        ],
        include: 
        [
            {
                model: Event,
                attributes: ['name', 'date']
            },
            {
                model: User,
                attributes: ['username']
            }

        ]
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET LOCATION BY ID



module.exports = router;