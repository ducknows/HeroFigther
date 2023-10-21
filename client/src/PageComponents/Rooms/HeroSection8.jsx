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
          The passage ahead ends at a sturdy door. You listen but hear nothing. You try the handle, it turns, and you enter the room. As you look around you hear a loud cry from behind you and swing round to see a wild man leaping towards you wielding a large battle axe. He is a mad BARBARIAN and you must fight him!

BARBARIAN SKILL 7 STAMINA 6

There is a door in the north wall opposite, through which you may Escape during the battle (turn to 189). If you defeat the Barbarian, turn to 273.

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
