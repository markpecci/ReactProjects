import React from 'react';
import './Card.css'; // Optional: If you want to create a separate style file for cards

function Card({ text, position }) {



  return (
    <div className={`card ${position}`}>
      <p>{text}</p>
    </div>
  );
}

export default Card;
