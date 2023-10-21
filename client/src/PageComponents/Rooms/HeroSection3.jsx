import React from 'react';
import '../../styles/HeroSection.css';

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
        </div>
        <div className="room-dungeon">
          <p>
          The bell gives a dull clang and after a few moments you see a withered old man climb into a small rowing boat moored on the north bank. He rows slowly across to you, moors the boat and limps towards you. He asks you for 3 Gold Pieces. When you protest at the price he mumbles some flimsy excuse about 'inflation'. He begins to get angry at your protestations. Do you pay him the 3 Gold Pieces (turn to 272) or threaten him (turn to 127)?
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
