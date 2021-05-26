const User = require('./User');
const Event = require('./Event');
const Location = require('./Location');

User.hasMany(Event, {
  foreignKey: 'user_id',
});

// Event.hasOne(Location, {
//     foreignKey: 'event_id',
// });

Location.hasMany(Event, {
  foreignKey: 'location_id',
});



module.exports = { User, Event, Location };
