import React, { useState } from 'react';
import '../../styles/HeroSection.css';
import Die from '../Die'; // Make sure to provide the correct path to your Die component

function Hero() {
  const hasOptions = false;

  const availablePaths = {
    east: { number: 301, available: true },
    west: { number: 248, available: true },
  };

  const [isRolling, setIsRolling] = useState(false);
  const [diceFace, setDiceFace] = useState(1);

  const testLuck = () => {
    setIsRolling(true);

    setTimeout(() => {
      const rollResult = Math.floor(Math.random() * 6) + 1;
      setDiceFace(rollResult);
      setIsRolling(false);

      if (rollResult <= 3) {
        console.log("You are unlucky!");
        // Navigate to room 248
        window.location.href = '/248'; // Change this line based on your routing logic
      } else {
        console.log("You are lucky!");
        // Navigate to room 301
        window.location.href = '/301'; // Change this line based on your routing logic
      }
    }, 1000); // Adjust the delay as needed
  };

  const renderPathLinks = () => {
    return (
      <ul className="path-links">
        {Object.keys(availablePaths).map((direction) => (
          <li key={direction} className={availablePaths[direction].available ? 'available' : 'unavailable'}>
            <a href={`/${availablePaths[direction].number}`}>Go to {`${availablePaths[direction].number}`}...</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="hero">
      <div className="top-header" />
      <div className="room-info">
        <div className="current-room"></div>
        <div className="room-dungeon">
          <p>
          The creature that has just awakened is an ORC! He scrambles to his feet and turns to grasp at a rope which is probably the alarm bell. You must attack him quickly.
ORC SKILL 6 STAMINA 5
          </p>
          {hasOptions && (
            <div className="room-options">
              <div className="option-text">Options:</div>
              <button className="option-button">Option 1</button>
              <button className="option-button">Option 2</button>
              {/* Add more options/buttons as needed */}
            </div>
          )}
          {renderPathLinks()}
          <div>
            <button onClick={testLuck} disabled={isRolling}>
              Test Luck
            </button>
            <Die face={diceFace} rolling={isRolling} />
          </div>
        </div>
      </div>
      <div className="main-section" />
      <div className="bottom-hero" />
    </section>
  );
}

export default Hero;