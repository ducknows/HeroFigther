// player.js
import { updateSidebar } from './gameState.js'
const gameInterface = document.querySelector('.game-interface');

export function createPlayer(username) {
    const newPlayer = {
      username,
      initialSkill: Math.floor(Math.random() * 6) + 7,
      initialEnergy: Math.floor(Math.random() * 6) + 13,
      initialLuck: Math.floor(Math.random() * 6) + 7,
      inventory: {
        sword: 1,
        shield: 1,
        provisions: 10,
        lamp: 1,
        potionSkill: 2,
        potionStamina: 2,
        potionFortune: 2,
      },
    };
  
    // Add the new player to the players array
    window.stateManager.gameState.players.push(newPlayer);
    savePlayers();
  
    // Select the newly created player
    selectPlayer(newPlayer);
  }
  
  export function selectPlayer(player) {
    window.stateManager.gameState.selectedPlayer = player;
    updateGameInterface();
  }
  
  export function updateGameInterface() {
    // Implement your game interface updates here
    // You can display the selected player's information and game content
    // For example:
    gameInterface.innerHTML = `
          <h1>Welcome, ${window.stateManager.gameState.selectedPlayer.username}</h1>
          <!-- Display player stats, inventory, game content, etc. -->
      `;
      updateSidebar();
      
  }
  
  export function savePlayers() {
    localStorage.setItem('players', JSON.stringify(window.stateManager.gameState.players));
  }
  