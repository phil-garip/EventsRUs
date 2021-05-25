const User = require('./User');
const Event = require('./Event');
const Location = require('./Location');

User.hasMany(Event, {
  foreignKey: 'user_id',
});

Event.hasOne(Location, {
    foreignKey: 'location_id',
});

// Location.belongsToMany(Event, {
//   foreignKey: 'event_id',
// });



module.exports = { User, Event, Location };
