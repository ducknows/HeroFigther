import Room from '../models/roomModel.mjs';

// Get all rooms
export const getAllRooms = async (ctx) => {
  try {
    const rooms = await Room.findAll();
    ctx.body = rooms;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Get a room by ID
export const getRoomById = async (ctx) => {
  const roomId = ctx.params.id;
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      ctx.status = 404;
      ctx.body = { error: 'Room not found' };
    } else {
      ctx.body = room;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Create a new room
export const createRoom = async (ctx) => {
  const { description } = ctx.request.body;
  try {
    const newRoom = await Room.create({ description });
    ctx.status = 201;
    ctx.body = newRoom;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: 'Invalid input data' };
  }
};

// Update a room by ID
export const updateRoom = async (ctx) => {
  const roomId = ctx.params.id;
  const { description } = ctx.request.body;
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      ctx.status = 404;
      ctx.body = { error: 'Room not found' };
    } else {
      await room.update({ description });
      ctx.body = room;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

// Delete a room by ID
export const deleteRoom = async (ctx) => {
  const roomId = ctx.params.id;
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      ctx.status = 404;
      ctx.body = { error: 'Room not found' };
    } else {
      await room.destroy();
      ctx.status = 204;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

const roomController = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
}
export default roomController;