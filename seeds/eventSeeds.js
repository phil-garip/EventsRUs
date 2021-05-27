const { Event } = require('../models');

const eventData = [
    {
        title: 'Sardines Open Mic',
        description: 'a supportive open mic for newcommers and oldfoks alike!',
        date: '2021-10-03',
        location: 'New York City'
    },
    {
        title: 'Tuna Boy Open Mic',
        description: 'a themed open mic for fishermen and sailors alike',
        date: '2021-06-10',
        location: 'The Great Barrier Reef'
    },
    {
        title: 'Shiver Me Timbers Open Mic',
        description: 'a risky open mic for pirates. land lubbers, beware!',
        date: '2021-07-18',
        location: 'The High Seas'
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;