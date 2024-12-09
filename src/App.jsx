import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

function App() {

  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  const cardScrollRanges = [
    {start: 0, end: 300},
    {start: 300, end: 600},
    {start: 600, end: 900}
  ];

  useEffect(()=> {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      //Update visible cards based on scroll position
      setVisibleCards(cardScrollRanges.map(range =>
        position >= range.start && position < range.end
      ));
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>Mark's Website</h1>
      <div className="card_container">
        {visibleCards.map((isVisible, index) => (
        <Card 
        key={index}
        isVisible={isVisible}        
        content={'Card ${index + 1}'} 
        position={index % 2 === 0 ? "fade-in-left visible-left" : "fade-in-right visible-right"} 
        />
        ))}
      </div>
    </div>
  );

}

export default App
