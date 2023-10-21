import React from 'react';
import '../../styles/HeroSection.css';

function Hero() {
  const hasOptions = false;

  const availablePaths = {
    north: { number: 1, available: false },
    south: { number: 2, available: false },
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
            At last, your two-day hike is over. You unsheathe your sword, lay it on the ground, and sigh with relief as you lower yourself down on to the mossy rocks to sit for a moment's rest. You stretch, rub your eyes, and finally look up at FireTop Mountain.
          </p>
          <p>
            The very mountain itself looks menacing. The steep face in front of you looks to have been savaged by the claws of some gargantuan beast. Sharp rocky crags jut out at unnatural angles. At the top of the mountain, you can see the eerie red coloring — probably some strange vegetation — which has given the mountain its name. Perhaps no one will ever know exactly what grows up there as climbing the peak must surely be impossible.
          </p>
          <p>
            Your quest lies ahead of you. Across the clearing is a dark cave entrance. You pick up your sword, get to your feet, and consider what dangers may lie ahead of you. But with determination, you thrust the sword home into its scabbard and approach the cave.
          </p>
          <p>
            You peer into the gloom to see dark, slimy walls with pools of water on the stone floor in front of you. The air is cold and dank. You light your lantern and step warily into the blackness. Cobwebs brush your face, and you hear the scurrying of tiny feet: rats most likely. You set off into the cave. After a few yards, you arrive at a junction. Will you turn west or east?
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
