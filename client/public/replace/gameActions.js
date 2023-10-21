import { rooms } from './rooms.js'
import { updateSidebar, updateMainContent } from './gameState.js';

export function goToRoom(index) {
    // Check if the index is within the valid range
    if (index >= 0 && index < rooms.length) {
        currentRoomIndex = index;
        updateMainContent();
    }
}

export function luckTest() {
    const playerLuck = player.luck; // Assuming player luck is accessible

    // Generate a random value between 1 and 12 (adjust as needed)
    const randomValue = Math.floor(Math.random() * 12) + 1;

    if (playerLuck >= randomValue) {
        // Luck test passed, update room and description
        currentRoomIndex = 4; // Go to the "Goblin-Free Passage" room
        rooms[currentRoomIndex].description = "You've successfully passed the goblin without making noise.";
    } else {
        // Luck test failed, update room and description
        currentRoomIndex = 3; // Go back to the "Goblin's Lair"
        rooms[currentRoomIndex].description = "The goblin is awake and angry!";
        goblin.isAwake = true; // Set the goblin's state to awake
    }

    updateMainContent();
    updateSidebar();
}

export function pickItem(itemName) {
    const currentRoom = rooms[currentRoomIndex];

    // Check if there is an option with the text "Take [itemName]" in the current room's options
    const takeOption = currentRoom.options.find((option) =>
        option.text.includes(`Take ${itemName}`)
    );

    if (takeOption) {
        // Check if the current room allows picking up the item
        if (inventory.hasOwnProperty(itemName)) {
          console.log(itemName);
            // Increment the item count if it's already in the inventory
            inventory[itemName]++;
        } else {
            // Add the item to the inventory if it's not there
            inventory[itemName] = 1;
        }

        // Update the room description to indicate the item has been taken
        rooms[currentRoomIndex].description = `You've taken the ${itemName}.`;

        // Remove the "Take [item]" option from the room
        const optionIndex = rooms[currentRoomIndex].options.indexOf(`Take ${itemName}`);
        if (optionIndex !== -1) {
            rooms[currentRoomIndex].options.splice(optionIndex, 1);
        }
     }
        // Update the sidebar to display the updated inventory
        updateSidebar();
    }

    export function openChest() {
        const randomOutcome = Math.random(); // Generate a random number between 0 and 1
    
        // Determine the outcome based on the random number
        if (randomOutcome < 0.3) {
            // 30% chance of finding treasure
            alert("You found a valuable treasure!");
        } else if (randomOutcome < 0.6) {
            // 30% chance of finding nothing
            alert("The chest is empty.");
        } else {
            // 40% chance of triggering a trap
            alert("As you open the chest, a trap is triggered!");
            // Handle the trap (e.g., reduce player's health, end the game, etc.)
        }
    
        // You can also update other aspects of the game as needed (e.g., player's inventory)
    }

    export function goLeft() {
        // Update the current room index to go left
        let currentRoomIndex = window.stateManager.gameState.currentRoomIndex;
        currentRoomIndex = (currentRoomIndex - 1 + rooms.length) % rooms.length;
        updateMainContent();
    }

    // Function to go right
   export  function goRight() {
        // Update the current room index to go right
        currentRoomIndex = (currentRoomIndex + 1) % rooms.length;
        updateMainContent();
    }