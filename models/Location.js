// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Location extends Model {}

// Location.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//         },
//       name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//       },
//       user_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'User',
//             key: 'id',
//         },
//       },
//     //   event_id: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //         model: 'Event',
//     //         key: 'id',
//     //     },
//     //   },
//     }, {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'Location',
//     }
// );

// module.exports = Location;