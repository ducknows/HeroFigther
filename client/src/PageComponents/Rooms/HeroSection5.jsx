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
          A rough timber doorway is on the east wall of the passage. You listen at the door and can hear a jolly sort of humming sound. Do you want to knock on the door and go in (turn to 97) or will you continue northwards (turn to 292)?
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
