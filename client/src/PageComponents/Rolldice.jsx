import React, { useEffect } from 'react';
import '../styles/Rolldice.css'

const RollDiceComponent = () => {
  useEffect(() => {
    // This function will be called when the component mounts.
    // You can place your provided JavaScript code here.

    // Select elements
    const dice = document.getElementById("dice");
    const rollSound = document.getElementById("roll-sound");

    // Function to roll the dice
    const rollDice = () => {
      dice.innerHTML = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      dice.style.animation = "roll 0.2s linear";
      dice.addEventListener("animationend", function () {
        dice.style.animation = "none";
      });
      rollSound.play();
    };

    // Attach the rollDice function to the button's click event
    const rollButton = document.getElementById("roll-button");
    rollButton.addEventListener("click", rollDice);

    // Clean up event listener when the component unmounts
    return () => {
      rollButton.removeEventListener("click", rollDice);
    };
  }, []);

  return (
    <div id="container">
      <div id="dice">?</div>
     
      <button id="roll-button">Roll</button>
      <audio id="roll-sound" src="https://freesound.org/data/previews/265/265115_4373976-lq.mp3"></audio>
    </div>
  );
};

export default RollDiceComponent;
