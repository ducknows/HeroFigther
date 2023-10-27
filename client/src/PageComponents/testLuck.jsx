// TestLuck.js
import React, { useState } from 'react';

function TestLuck({ playerLP, onTestResult }) {
  const [diceValues, setDiceValues] = useState([1, 1]);

  const rollDice = () => {
    const newValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
    setDiceValues(newValues);

    const sum = newValues[0] + newValues[1];
    onTestResult(sum, playerLP);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll the Dice</button>
      <div>
        Dice 1: {diceValues[0]}
        <br />
        Dice 2: {diceValues[1]}
        <br />
      </div>
    </div>
  );
}

export default TestLuck;
