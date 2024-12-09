import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const[isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle visibility
  };
  return (
    <div>
      <h1>Mark's Website</h1>
      <div className="card_container">
        <Card         
        text="Card 1" 
        position={isVisible ? "fade-in-left visible-left" : "fade-in-left"} 
        />
        <Card 
        text="Card 2" 
        position={isVisible ? "fade-in-right visible-right" : "fade-in-right"} 
        />
      </div>
      <button onClick={toggleVisibility}>{isVisible ? 'Hide Cards' : 'Show Cards'}</button>
    </div>
  );

}

export default App
