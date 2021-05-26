const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },

      title: {
          type: DataTypes.STRING,
          allowNull: false,
        },

      description: {
          type: DataTypes.TEXT,
        },
      time: {
          type: DataTypes.DATE
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
        },
      },
      location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Location',
            key: 'id',
        },
      },
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Event',
    }
);

module.exports = Event;