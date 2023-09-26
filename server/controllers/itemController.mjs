import Item from '../models/itemModel.mjs';

// Get all items
export const getAllItems = async (ctx) => {
  try {
    const items = await Item.findAll();
    ctx.body = items;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Get an item by ID
export const getItemById = async (ctx) => {
  const itemId = ctx.params.id;
  try {
    const item = await Item.findByPk(itemId);
    if (!item) {
      ctx.status = 404;
      ctx.body = { error: 'Item not found' };
    } else {
      ctx.body = item;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Create a new item
export const createItem = async (ctx) => {
  const { name, skill, energy } = ctx.request.body;
  try {
    const newItem = await Item.create({ name, skill, energy });
    ctx.status = 201;
    ctx.body = newItem;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: 'Invalid input data' };
  }
};

// Update an item by ID
export const updateItem = async (ctx) => {
  const itemId = ctx.params.id;
  const { name, skill, energy } = ctx.request.body;
  try {
    const item = await Item.findByPk(itemId);
    if (!item) {
      ctx.status = 404;
      ctx.body = { error: 'Item not found' };
    } else {
      await item.update({ name, skill, energy });
      ctx.body = item;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Delete an item by ID
export const deleteItem = async (ctx) => {
  const itemId = ctx.params.id;
  try {
    const item = await Item.findByPk(itemId);
    if (!item) {
      ctx.status = 404;
      ctx.body = { error: 'Item not found' };
    } else {
      await item.destroy();
      ctx.status = 204;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

const itemController = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
}

export default itemController;