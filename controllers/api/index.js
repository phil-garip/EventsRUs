const router = require('express').Router();

const userRoutes = require('./user-routes');

const dashboardRoute = require('./dashboard-route')

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoute)

module.exports = router;
