const { User } = require('../models');

const userData = [
    {
        username: 'Paige93',
        email: 'paige@ucb.com',
        password: 'new2comedy'
    },
    {
        username: 'BlackBeard',
        email: 'blackbeard@hotmail.com',
        password: 'funnyPirate88'
    },
    {
        username: 'SeaChicken',
        email: 'tunacan@bumblebee.com',
        password: 'somethingFishy22'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;