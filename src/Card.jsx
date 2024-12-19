import React from 'react';
import './Card.css'; // Optional: If you want to create a separate style file for cards

function Card({ title, text, position }) {



  return (
    <div className={`card ${position}`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
