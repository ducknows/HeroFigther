import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';

export const Item = sequelize.define('Item', {
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  energy: {
    type: DataTypes.INTEGER,
  },
  skill: {
    type: DataTypes.INTEGER,
  },
});

export default Item;