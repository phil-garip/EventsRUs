const router = require('express').Router();
const { Event } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbEventData = await Event.create({
            title: req.body.title,
            description: req.body.description,
            time: req.body.time,
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

