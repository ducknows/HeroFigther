import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import Player from './playerModel.mjs';
import Item from './itemModel.mjs';
import Monster from './monsterModel.mjs';

export const Room = sequelize.define('Room', {
  room_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Other room attributes, e.g., description
});

// Define associations
Room.hasMany(Item); // A room can contain multiple items
Room.hasMany(Monster); // A room can contain multiple monsters
Room.belongsTo(Room, { as: 'forwardRoom', foreignKey: 'forward_id' }); // Room can have multiple exits to other rooms
Room.belongsTo(Room, { as: 'backwardRoom', foreignKey: 'backward_id' });
Room.belongsTo(Room, { as: 'leftRoom', foreignKey: 'left_id' });
Room.belongsTo(Room, { as: 'rightRoom', foreignKey: 'right_id' });

export default Room;