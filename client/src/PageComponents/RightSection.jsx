import React from 'react';
import '../styles/RightSection.css';
import Rolldice from './Rolldice';

function RightSection() {
  return (
    <section className="right-section">
      <div className="top-right-header">
        <div className="player-box">
        <div className="player-status">Stats</div>
          <div className="player-stats" >HP: 80  XP: 100 LP: 50</div>
        </div>
      </div>
      <div className="grid-container">
        <div className="item-box">
        <div className="item-fringe">Items</div>
          <ul className="items-position">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            {/* Add more items as needed */}
          </ul>
          <div className="item-fringe-bottom"></div>
        </div>
        <div className="resources-box">
        <div className="resources-box-start">Resources:</div>
          <ul className="items-position">
            <li>Gold: </li>
            <li>Jewels: </li>
            <li>Potions: </li>
            <li>Provisions: </li>
          </ul>
          <div className="resources-box-end"></div>
        </div>
        <div className="dice-roll-box">
        <div className="dice-roll-start">Dices</div>
        <Rolldice/>
        <div className="dice-roll-end"></div>
        </div>
        
      </div>
      <div className="bottom-status"></div>
    </section>
  );
}

export default RightSection;
