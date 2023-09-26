import Player from '../models/playerModel.mjs';

// Get all players
export const getAllPlayers = async (ctx) => {
  try {
    const players = await Player.getAll();
    ctx.body = players;
  } catch (error) {
    console.error('Sequelize Error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Get a player by ID
export const getPlayerById = async (ctx) => {
  const playerId = ctx.params.id;
  try {
    const player = await Player.findByPk(playerId);
    if (!player) {
      ctx.status = 404;
      ctx.body = { error: 'Player not found' };
    } else {
      ctx.body = player;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Create a new player
export const createPlayer = async (ctx) => {
  const { email, password, username } = ctx.request.body;

  try {
    // Validate the incoming data (you can use a library like Joi for validation)
    // Example validation (replace with your actual validation logic):
    if (!email || !password) {
      ctx.status = 400;
      ctx.body = { error: 'Email and password are required.' };
      return;
    }

    const skill = Math.floor(Math.random() * 6) + 1 + 6;
    const energy = Math.floor(Math.random() * 6) + 1 + 12;
    const luck = Math.floor(Math.random() * 6) + 1 + 6;
    
    // Create a new player in the database
    const newPlayer = await Player.create({ email, password, username,

    skill: skill,
    energy: energy,
    luck: luck,
    initialskill: skill,
    initialenergy: energy,
    initialluck: luck,
    gold: 0,

    // Initialize player's inventory
    inventory: JSON.stringify ({
      sword: 1, // Initial quantity of items
      shield: 1,
      provisions: 10,
      lamp: 1,
      potionskill: 2, // Initial quantity of potions
      potionstamina: 2,
      potionfortune: 2,
    }),
  });

    console.log(newPlayer);
    // Return the newly created player with a 201 status code
    ctx.status = 201;
    ctx.body = newPlayer;
  } catch (error) {
    // Log the error for debugging
    console.error('Error creating player:', error);

    // Return a 400 status code and an error message
    ctx.status = 400;
    ctx.body = { error: 'Invalid input data' };
  }
};

// Update a player by ID
export const updatePlayer = async (ctx) => {
  const playerId = ctx.params.id;
  const { email, password, username, energy, current_room_id } = ctx.request.body;
  try {
    const player = await Player.findByPk(playerId);
    if (!player) {
      ctx.status = 404;
      ctx.body = { error: 'Player not found' };
    } else {
      await player.update({ email, password, username, energy, current_room_id });
      ctx.body = player;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Delete a player by ID
export const deletePlayer = async (ctx) => {
  const playerId = ctx.params.id;
  try {
    const player = await Player.findByPk(playerId);
    if (!player) {
      ctx.status = 404;
      ctx.body = { error: 'Player not found' };
    } else {
      await player.destroy();
      ctx.status = 204;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

const playerController = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
};

// Export the object
export default playerController;