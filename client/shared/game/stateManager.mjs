// shared/game/stateManager.js

export class StateManager {
  constructor() {
    this.gameState = {
      players: [],    // Store player data
      rooms: [],      // Store room data
      // Add other game state properties here
    };
  }

  // Methods to get and update game state
  getPlayerById(playerId) {
    return this.gameState.players.find((player) => player.id === playerId);
  }

  updatePlayer(playerId, updates) {
    const playerIndex = this.gameState.players.findIndex((player) => player.id === playerId);
    if (playerIndex !== -1) {
      this.gameState.players[playerIndex] = { ...this.gameState.players[playerIndex], ...updates };
    }
  }

  getRoomById(roomId) {
    return gameState.rooms.find((room) => room.id === roomId);
  }

  // Add methods for rooms, items, monsters, etc.
}

export default StateManager;
