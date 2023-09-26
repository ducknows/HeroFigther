import Monster from '../models/monsterModel.mjs';

// Get all monsters
export const getAllMonsters = async (ctx) => {
  try {
    const monsters = await Monster.findAll();
    ctx.body = monsters;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Get a monster by ID
export const getMonsterById = async (ctx) => {
  const monsterId = ctx.params.id;
  try {
    const monster = await Monster.findByPk(monsterId);
    if (!monster) {
      ctx.status = 404;
      ctx.body = { error: 'Monster not found' };
    } else {
      ctx.body = monster;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Create a new monster
export const createMonster = async (ctx) => {
  const { name, skill, energy } = ctx.request.body;
  try {
    const newMonster = await Monster.create({ name, skill, energy });
    ctx.status = 201;
    ctx.body = newMonster;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: 'Invalid input data' };
  }
};

// Update a monster by ID
export const updateMonster = async (ctx) => {
  const monsterId = ctx.params.id;
  const { name, skill, energy } = ctx.request.body;
  try {
    const monster = await Monster.findByPk(monsterId);
    if (!monster) {
      ctx.status = 404;
      ctx.body = { error: 'Monster not found' };
    } else {
      await monster.update({ name, skill, energy });
      ctx.body = monster;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Delete a monster by ID
export const deleteMonster = async (ctx) => {
  const monsterId = ctx.params.id;
  try {
    const monster = await Monster.findByPk(monsterId);
    if (!monster) {
      ctx.status = 404;
      ctx.body = { error: 'Monster not found' };
    } else {
      await monster.destroy();
      ctx.status = 204;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

const monsterController = {
  getAllMonsters,
  getMonsterById,
  createMonster,
  updateMonster,
  deleteMonster
}

export default monsterController;