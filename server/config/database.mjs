//import('dotenv').config();
import { Sequelize } from 'sequelize';
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize({
  dialect: 'postgres', // Specify the database dialect
  host: 'localhost',    // Database host
  port: 5432,           // Database port
  username: 'postgres', // Your PostgreSQL username
  password: 'admin', // Your PostgreSQL password
  database: 'dungeon_rpg', // Your PostgreSQL database name
  logging: false,        // Disable logging (you can enable it for debugging)
});

export default sequelize;
