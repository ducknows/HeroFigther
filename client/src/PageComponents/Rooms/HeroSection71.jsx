import React from 'react';
import '../../styles/HeroSection.css';

function Hero() {
  const hasOptions = false;

  const availablePaths = {
 
    east: { number: 301, available: true },
    west: { number: 248, available: true },
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
        <div className="current-room">
          


        </div>
        <div className="room-dungeon">
          <p>
          There is a right-hand turn to the north in the passage. Cautiously you approach a sentry post on the corner and, as you look in, you can see a strange Goblin-like creature in leather armour asleep at his post. You try to tiptoe past him. Test your Luck. If you are Lucky, he does not wake up and remains snoring loudly - turn to 301. If you are Unlucky, you step with a crunch on some loose ground and his eyes flick open - turn to 248.
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
