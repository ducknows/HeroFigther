import React from 'react';
import '../styles/HeroSection.css';

function Hero() {
  const hasOptions = false;

  const availablePaths = {
 
    east: { number: 278, available: true },
    west: { number: 71, available: true },
  };

  const renderPathLinks = () => {
    return (
      <ul className="path-links">
        {Object.keys(availablePaths).map((direction) => (
          <li key={direction} className={availablePaths[direction].available ? 'available' : 'unavailable'}>
            <a href={`/${availablePaths[direction].number}`}>Go to {direction.charAt(0).toUpperCase() + direction.slice(1)}...</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="hero">
      <div className="top-header" />
      <div className="room-info">
        <div className="current-room">
          The steep face in front of you looks to have been savaged by the claws of some gargantuan beast.
        </div>
        <div className="room-dungeon">
          <p>
Test your Luck. If you are Lucky, you escape without attracting the Ogre's attention. If you are Unlucky, you curse as you kick a small stone which goes skidding across the cavern floor. You draw your sword in case the Ogre has heard it - turn to 16. If you were Lucky, you creep down the corridor back to the crossroads. Turn to 269.
          </p>
          
          {renderPathLinks()}
        </div>
        {hasOptions && (
          <div className="room-options">
            <div className="option-text">Options:</div>
            <button className="option-button">Option 1</button>
            <button className="option-button">Option 2</button>
            {/* Add more options/buttons as needed */}
          </div>
        )}
      </div>
      <div className="main-section" />
      <div className="bottom-hero" />
    </section>
  );
}

export default Hero;
