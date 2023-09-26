import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';

export const Monster = sequelize.define(
    'monster', 
    {
        monster_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    skill: {
        type: DataTypes.INTEGER,
    },
    energy: {
        type: DataTypes.INTEGER,
    },
    });

export default Monster;