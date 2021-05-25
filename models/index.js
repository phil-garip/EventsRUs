const User = require('./User');
const Event = require('./Event');
const Location = require('./Location');

User.hasMany(Event, {
  foreignKey: 'user_id',
});

Event.belongsTo(Location, {
  foreignKey: 'location_id',
});



module.exports = { User, Gallery, Painting };
