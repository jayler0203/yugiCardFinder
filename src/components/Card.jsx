// src/components/Card.js
import React from 'react';

const Card = ({ character }) => {
  return (
    <div className="card">
      <img src={character.card_images[0].image_url} alt={character.name} />
      <div>
        <h2>{character.name}</h2>
        <p>Status: {character.desc}</p>
        <p>Species: {character.race}</p>
      </div>
    </div>
  );
};

export default Card;

