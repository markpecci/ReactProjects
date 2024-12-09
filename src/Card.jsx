import React from 'react';
import './Card.css'; // Optional: If you want to create a separate style file for cards

function Card({ isVisible, content, position }) {

    if(!isVisible){
        return null;
    }

  return (
    <div className={`card ${position}`}>
      {content}
    </div>
  );
}

export default Card;
