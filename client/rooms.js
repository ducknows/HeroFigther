import { goToRoom, luckTest, pickItem, openChest } from './gameActions.js';

export const rooms = [
            {   
                title: "Room 1",
                description: "You are in a dimly lit room with a door to the left.",
                options: [
            { text: "Go left", handler: () => goToRoom(1) },
            { text: "Go back", handler: () => goToRoom(0) },
        ],
            },
            {
                title: "Room 2",
                description: "You enter a small chamber with a treasure chest.",
                options: [
                  { text: "Open the chest", handler: () => openChest() },
                  { text: "Go back", handler: () => goToRoom(0) },
                  { text: "Go forward", handler: () => goToRoom(2) },
                ],
            },
            {
                title: "Room 3",
                description: "You find yourself in a dark corridor with a torch on the wall.",
                options: [
                  { text: "Light the torch", handler: () => openChest() },
                  { text: "Go forward", handler: () => goToRoom(3)},
                  , 
                ]
            },
            {
              title: "Room 4",
                description: "You find a room with a sword lying on the ground.",
                options: [
                  { text: "Take Sword", handler: () => pickItem('Sword') },
                  { text: "Go back", handler: () => goToRoom(2) },
                  { text: "Go forward", handler: () => goToRoom(4) },
                         ]
            },
            {
                title: "Room 5",
                description: "You are in the Goblin's Lair. The goblin is sleeping.",
                options: [
                   
                { text: "Try to pass quietly", handler: () => goToRoom(5) },
                  { text: "Go back", handler: () => goToRoom(3) },
                ]
            },
          {
                title: "Room 6",
                description: "You've successfully passed the goblin without making noise.",
                options: [
                  {text: "Continue forward", handler: () => goToRoom(6)}, 
                  {text: "Go back", handler: () => goToRoom(4)}],
          }
            // Add more room objects as needed
        ];