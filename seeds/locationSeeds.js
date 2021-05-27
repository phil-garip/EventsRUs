const { Location } = require('../models');

const locationData = [
    {
        name: 'New York City',
    },
    {
        name: 'The High Seas',
    },
    {
        name: 'The Great Barrier Reef'
    }
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;