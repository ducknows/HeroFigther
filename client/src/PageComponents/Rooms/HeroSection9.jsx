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
        </div>
        <div className="room-dungeon">
          <p>
          Amazed at the success of your bluff, you decide to push your luck a little further. You can either examine the Skeletons' tools or pretend you're looking for work-sheets and look through the drawers of the various benches. If you choose the tools, turn to 34. If you search the drawers, turn to 322. You hear a noise from behind the north door and realize you will have to hurry!
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
