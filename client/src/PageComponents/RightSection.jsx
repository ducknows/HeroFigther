import React, { useState, useEffect } from 'react';
import '../styles/RightSection.css';
import Rolldice from './Rolldice';

function RightSection() {
  const [playerStats, setPlayerStats] = useState({ HP: 80, XP: 100, LP: 50 });
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [resources, setResources] = useState({
    Gold: 0,
    Jewels: 0,
    Potions: 0,
    Provisions: 0,
  });

  useEffect(() => {
  }, []);

  return (
    <section className="right-section">
      <div className="top-right-header">
        <div className="player-box">
          <div className="player-status">Stats</div>
          <div className="player-stats">
            HP: {playerStats.HP} XP: {playerStats.XP} LP: {playerStats.LP}
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="item-box">
          <div className="item-fringe">Items</div>
          <ul className="items-position">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="item-fringe-bottom"></div>
        </div>
        <div className="resources-box">
          <div className="resources-box-start">Resources:</div>
          <ul className="items-position">
            {Object.entries(resources).map(([resource, value]) => (
              <li key={resource}>
                {resource}: {value}
              </li>
            ))}
          </ul>
          <div className="resources-box-end"></div>
        </div>
        <div className="dice-roll-box">
          <div className="dice-roll-start">Dices</div>
          <Rolldice />
          <div className="dice-roll-end"></div>
        </div>
      </div>
      <div className="bottom-status"></div>
    </section>
  );
}

export default RightSection;
