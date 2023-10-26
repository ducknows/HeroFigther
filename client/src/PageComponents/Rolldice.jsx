import React, { useEffect, useState } from 'react';
import '../styles/Rolldice.css';

const RollDiceComponent = () => {
  const [diceValues, setDiceValues] = useState([1, 1]);

  useEffect(() => {
    const rollDice = () => {
      const newValues = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ];
      setDiceValues(newValues);
      playRollSound();
    };

    const playRollSound = () => {
      const rollSound = document.getElementById("roll-sound");
      if (rollSound) {
        rollSound.play();
      }
    };

    const rollButton = document.getElementById("roll-button");
    rollButton.addEventListener("click", rollDice);

    return () => {
      rollButton.removeEventListener("click", rollDice);
    };
  }, []);

  return (
    <div id="container">
      <div className="dice-container">
        <div className="dice">{diceValues[0]}</div>
        <div className="dice">{diceValues[1]}</div>
      </div>
      <button id="roll-button">Roll</button>
      <audio id="roll-sound" src="https://freesound.org/data/previews/265/265115_4373976-lq.mp3"></audio>
    </div>
  );
};

export default RollDiceComponent;
