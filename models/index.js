const User = require('./User');
const Event = require('./Event');
const Location = require('./Location');

//loop through events and add user ids
// User.hasMany(Event, {
//   foreignKey: 'user_id',
// });

// Event.belongsTo(User, {
//   foreignKey: 'user_id',
// });

User.hasOne(Location, {
  foreignKey: 'user_id',
});

User.hasMany(Event, {
  foreignKey: 'user_id',
});

Event.belongsTo(User, {
  foreignKey: 'user_id',
});

Location.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Event, Location };
