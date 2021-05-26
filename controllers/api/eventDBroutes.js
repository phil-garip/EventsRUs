const router = require('express').Router();
const { Event } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbEventData = await Event.create({
            
        })
    }
})

