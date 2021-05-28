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
      date_id: {
          type: DataTypes.STRING,
      },
      location_name: {
        type: DataTypes.STRING
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        }
      }
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Event',
    }
);

module.exports = Event;