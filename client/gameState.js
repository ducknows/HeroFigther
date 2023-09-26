export function updateSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const inventoryItems = Object.entries(inventory).map(([itemName, itemCount]) => {
        return `<p>${itemName}: ${itemCount}</p>`;
    });

    sidebar.innerHTML = `
        <h2>User Profile</h2>
        <p>Initial Skill: ${initialSkill}</p>
        <p>Initial Energy: ${initialEnergy}</p>
        <p>Initial Luck: ${initialLuck}</p>
        <h3>Inventory:</h3>
        ${inventoryItems.join("")}
    `;
}
// Function to update the main content based on the current room
export function updateMainContent() {
    const main = document.querySelector("main");
    const currentRoom = rooms[currentRoomIndex];

    const optionsHTML = currentRoom.options.map((option, index) => {
        return `<button onclick="handleOption(${index})">${option.text}</button>`;
    }).join(" ");

    main.innerHTML = `
        <h1>${currentRoom.title}</h1>
        <p>${currentRoom.description}</p>
        <p>Choose an option:</p>
        ${optionsHTML}
    `;
}

export function handleOption(index) {
    const currentRoom = rooms[currentRoomIndex];
    const selectedOption = currentRoom.options[index];
    selectedOption.handler(); // Execute the associated handler function
}