import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './routes/api.mjs';
import db from './config/database.mjs'; // Your database configuration
import sequelize from './config/database.mjs';
import cors from '@koa/cors';

const app = new Koa();
app.use(cors());
// Sync the database to create tables based on your models
sequelize.sync() // Set 'force' to true to drop and recreate tables (use with caution)
  .then(() => {
    console.log('Database synchronized.');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Middleware
app.use(bodyParser());

// Database connection setup
db.authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Routes
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;
