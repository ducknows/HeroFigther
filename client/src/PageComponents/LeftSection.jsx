import React from 'react';
import '../styles/LeftSection.css';

function LeftSection() {
  const creatures = [
    {
      id: 1,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 2,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 3,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 4,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 5,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 6,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 7,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 8,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 9,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 10,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 11,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 12,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 13,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 14,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 15,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    },
    {
      id: 16,
      creatureInfo: [
        { label: 'Type', value: '' },
        { label: 'XP', value: '' },
        { label: 'HP', value: '' },
      ],
    }
  ];

  return (
    <section className="left-section">
      <div className="left-header">Monsters</div>
      <div className="creature-container">
        {creatures.map((creature, index) => (
          <div className="creature-box" key={creature.id}>
            <div className="creature-info">
              {creature.creatureInfo.map((info, i) => (
                <div className="styled-text" key={i}>
                  {info.label}: {info.value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-header"></div>
    </section>
  );
}

export default LeftSection;
