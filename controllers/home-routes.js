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
router.get('/create-event', (req, res) => {
  res.render('eventCreate');
});

// GET DASHBOARD
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
});




  

module.exports = router;
  
