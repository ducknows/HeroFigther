import  DataTypes  from 'sequelize';
import sequelize from '../config/database.mjs';

export const Player = sequelize.define('Player', {
  // Define the table columns and their data types
  player_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
  },
  initialSkill: {
    type: DataTypes.INTEGER,
  },
  initialEnergy: {
    type: DataTypes.INTEGER,
  },
  initialLuck: {
    type: DataTypes.INTEGER,
  },
  skill: {
    type: DataTypes.INTEGER,
  },
  energy: {
    type: DataTypes.INTEGER,
  },
  luck: {
    type: DataTypes.INTEGER,
  },
  gold: {
    type: DataTypes.INTEGER,
  },
  inventory: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  room_id: {
    type: DataTypes.INTEGER,
  },
});

export default Player;