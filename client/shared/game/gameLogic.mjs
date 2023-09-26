// shared/game/gameLogic.js
import { StateManager } from "./stateManager.mjs";
import updatePlayerStats from './player.mjs';
const stateManager = new StateManager();

class GameLogic {
  constructor(stateManager) {
    this.stateManager = stateManager;
  }

  // Core game logic functions

  async initializePlayer(playerId) {
    

    let player = this.stateManager.getPlayerById(playerId);

    
    // Roll dice for initial skill and energy within the specified ranges
    player.skill = Math.floor(Math.random() * 6) + 1 + 6;
    player.energy = Math.floor(Math.random() * 6) + 1 + 12;
    player.luck = Math.floor(Math.random() * 6) + 1 + 6;
    player.initialSkill = player.skill;
    player.initialEnergy = player.energy;
    player.initialLuck = player.luck;
    player.gold = 0;

    // Initialize player's inventory
    player.inventory = JSON.stringify ({
      sword: 1, // Initial quantity of items
      shield: 1,
      provisions: 10,
      lamp: 1,
      potionSkill: 2, // Initial quantity of potions
      potionStamina: 2,
      potionFortune: 2,
    });

    // Update player's stats in the state
    this.stateManager.updatePlayer(playerId, {
      skill: player.skill,
      energy: player.energy,
      luck: player.luck,
      gold: player.gold,
    });
  }

  
  // Function to pick up an item
  pickUpItem(playerId, itemName) {
    const player = this.stateManager.getPlayerById(playerId);
    const room = this.stateManager.getRoomById(player.currentRoomId);

    // Check if the item exists in the room
    if (room.items && room.items[itemName] > 0) {
      // Increment the item count in the player's inventory
      if (!player.inventory[itemName]) {
        player.inventory[itemName] = 1;
      } else {
        player.inventory[itemName] += 1;
      }

      // Decrement the item count in the room
      room.items[itemName] -= 1;

      // Update the game state
      this.stateManager.updatePlayer(playerId, { inventory: player.inventory });
      this.stateManager.updateRoom(player.currentRoomId, { items: room.items });

      return {
        success: true,
        message: `You picked up a ${itemName}.`,
      };
    } else {
      return {
        success: false,
        message: `There are no ${itemName}s in this room.`,
      };
    }
  }

  // Function to drop an item
  dropItem(playerId, itemName) {
    const player = this.stateManager.getPlayerById(playerId);
    const room = this.stateManager.getRoomById(player.currentRoomId);

    // Check if the player has the item in their inventory
    if (player.inventory && player.inventory[itemName] > 0) {
      // Decrement the item count in the player's inventory
      player.inventory[itemName] -= 1;

      // Increment the item count in the room
      if (!room.items[itemName]) {
        room.items[itemName] = 1;
      } else {
        room.items[itemName] += 1;
      }

      // Update the game state
      this.stateManager.updatePlayer(playerId, { inventory: player.inventory });
      this.stateManager.updateRoom(player.currentRoomId, { items: room.items });

      return {
        success: true,
        message: `You dropped a ${itemName}.`,
      };
    } else {
      return {
        success: false,
        message: `You don't have any ${itemName}s in your inventory.`,
      };
    }
  }

   // Function to perform a luck test
   performLuckTest(playerId) {
    const player = this.stateManager.getPlayerById(playerId);
    
    // Simulate two dice rolls (values between 1 and 6)
    const diceRoll1 = Math.floor(Math.random() * 6) + 1;
    const diceRoll2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the total luck test result
    const luckTestResult = diceRoll1 + diceRoll2;

    // Check if the result is greater than the player's luck
    if (luckTestResult > player.luck) {
      // Player is unlucky, deduct 1 point of luck
      const updatedLuck = player.luck - 1;
      this.updatePlayerStats(playerId, { luck: updatedLuck });

      // Return false to indicate failure in the luck test
      return false;
    } else {
      // Player is lucky, no change to luck
      // Return true to indicate success in the luck test
      return true;
    }
  }

  drinkPotion(playerId, potionType) {
    const player = this.stateManager.getPlayerById(playerId);
    const inventory = JSON.parse(player.inventory);
  
    // Check if the player has the specified potion in their inventory
    if (inventory[`potion${potionType}`] > 0) {
      // Increase the corresponding stat (skill, energy, luck)
      switch (potionType) {
        case 'skill':
          player.skill += player.initialSkill;
          break;
        case 'stamina':
          player.energy += player.initialSkill;
          break;
        case 'fortune':
          player.initialLuck += 1; 
          player.luck = player.initialLuck;
          break;
        default:
          break;
      }
  
      // Decrease the quantity of the consumed potion
      inventory[`potion${potionType}`] -= 1;
  
      // Update player's stats
      this.updatePlayerStats(playerId, {
        skill: player.skill,
        energy: player.energy,
        luck: player.luck,
      });
  
      // Convert the inventory object back to JSON and update the player's inventory field
      player.inventory = JSON.stringify(inventory);
  
      return {
        success: true,
        message: `You drank a ${potionType} potion and gained the corresponding bonus.`,
      };
    } else {
      return {
        success: false,
        message: `You don't have any ${potionType} potions in your inventory.`,
      };
    }
  } 

  // Function to perform a battle action
  performBattleAction(playerId, roomId, performLuckTest = false, chooseToEscape = false) {
    const player = this.stateManager.getPlayerById(playerId);
    const room = this.stateManager.getRoomById(roomId);
    
    // Get the monster in the room
    const monster = room.monster;

    if (chooseToEscape) {
      // Player chooses to escape, automatically hit by the creature
      player.energy -= 2;

      // Check if the player wants to perform a luck test on the wound
      if (performLuckTest) {
        const luckTestResult = this.performLuckTest(playerId);
        if (luckTestResult) {
          // Player's energy increases by 1 point
          player.energy += 1;
        } else {
          // Player's energy decreases by 1 point along with monster damage
          player.energy -= 1;
        }
      }
    } else {
      // Player does not choose to escape, proceed with normal battle
      // Roll two dice for player and monster
      const playerDiceRoll1 = Math.floor(Math.random() * 6) + 1;
      const playerDiceRoll2 = Math.floor(Math.random() * 6) + 1;
      const monsterDiceRoll1 = Math.floor(Math.random() * 6) + 1;
      const monsterDiceRoll2 = Math.floor(Math.random() * 6) + 1;

      // Calculate attack values
      const playerAttack = player.skill + playerDiceRoll1 + playerDiceRoll2;
      const monsterAttack = monster.skill + monsterDiceRoll1 + monsterDiceRoll2;

      // Compare attack values
      if (playerAttack > monsterAttack) {
        // Player's attack is greater, monster takes 2 damage
        monster.energy -= 2;
      } else if (playerAttack < monsterAttack) {
        // Monster's attack is greater, player loses 2 energy
        player.energy -= 2;
      } else {
        // It's a draw, no change in energy or monster damage
      }

      // Check if the player has luck points for a bonus and wants to perform the luck test
      if (player.luck > 0 && performLuckTest) {
        const luckTestResult = this.performLuckTest(playerId);
        if (luckTestResult) {
          // Player's attack gets a +2 bonus
          playerAttack += 2;
        } else {
          // Player's attack is reduced by 1 point
          playerAttack -= 1;
        }
      }

      // Handle player energy update based on the luck test (if applicable)
      if (playerAttack < monsterAttack && player.luck > 0) {
        if (performLuckTest) {
          const luckTestResult = this.performLuckTest(playerId);
          if (luckTestResult) {
            // Player's energy increases by 1 point
            player.energy += 1;
          } else {
            // Player's energy decreases by 1 point along with monster damage
            player.energy -= 1;
          }
        }
      }

      // Battle finishes when player or monster energy reaches zero
      if (player.energy <= 0 || monster.energy <= 0) {
        // Handle end of battle, e.g., transition to a new room
      }
    }

    // Update player and monster stats
    this.updatePlayerStats(playerId, { energy: player.energy, skill: player.skill });
    this.updateMonsterStats(roomId, { energy: monster.energy, skill: monster.skill });
  }

  consumeProvision(playerId) {
    const player = this.stateManager.getPlayerById(playerId);

    // Check if there are provisions in the player's inventory and the room allows resting
    if (player.inventory.provisions > 0 && this.isRestRoom(player.currentRoomId)) {
      // Calculate how much energy can be restored (up to initial energy value)
      const energyRestored = Math.min(4, player.initialEnergy - player.energy);

      // Consume one provision and increase energy
      player.inventory.provisions -= 1;
      player.energy += energyRestored;

      // Update player stats
      this.updatePlayerStats(playerId, { energy: player.energy });

      return {
        success: true,
        message: `You consumed a provision and restored ${energyRestored} energy.`,
      };
    } else {
      return {
        success: false,
        message: `You cannot consume a provision in this room.`,
      };
    }
  }

  // Function to check if a room allows resting
  isRestRoom(roomId) {
    const room = this.stateManager.getRoomById(roomId);
    return room.rest === true;
  }


  // Other game logic functions
}

let gameLogic = new GameLogic(stateManager);
console.log(gameLogic);
console.log(gameLogic.initializePlayer('test@test.com', '1234', 'test', 1));

export default GameLogic;