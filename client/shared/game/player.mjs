// shared/game/player.js

    // Player-related logic functions
  
    // Function to update player statistics
    function updatePlayerStats(stateManager, playerId, updates) {
        stateManager.updatePlayer(playerId, updates);
      }
  
    // Function to handle the rest mechanic
    function rest(stateManager, playerId) {
        const player = stateManager.getPlayerById(playerId);
        const initialStats = { skill: player.initialSkill, energy: player.initialEnergy };
        updatePlayerStats(stateManager, playerId, initialStats);
      }
  
    // Other player-related functions
  
   export default {updatePlayerStats, rest};
  