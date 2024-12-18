import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [scrollPos, setScrollPos] = useState(0); // To track scroll position
  const[isVisible, setIsVisible] = useState([false, false, false, false]);

  //TODO: make cards in a map and have them more efficiently stored / added
  /*
  const cardsData = [
    { id: 1, text: 'Card 1', positionClass: 'fade-in-left' },
    { id: 2, text: 'Card 2', positionClass: 'fade-in-right' },
    // You can add more cards here as needed
  ];
*/
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling detected! Current scroll position:', window.scrollY);
      const currentScroll = window.scrollY;
      setScrollPos(currentScroll);

      // Update visibility for cards based on scroll position
      const newVisibility = [
        currentScroll > 150 && currentScroll < 399, 
        currentScroll > 400 && currentScroll < 749, 
        currentScroll > 750 && currentScroll < 1049, 
        currentScroll > 1050 && currentScroll < 1400, 
      ];
      setIsVisible(newVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    

  return (
    <div>
      <h1>Mark's Website</h1>
      <div className="card_container">
        <Card         
        text="Card 1" 
        position={isVisible[0] ? "fade-in-left visible-left" : "fade-in-left"} 
        />
        <Card 
        text="Card 2" 
        position={isVisible[1] ? "fade-in-right visible-right" : "fade-in-right"} 
        />
        <Card 
        text="Card 3" 
        position={isVisible[2] ? "fade-in-left visible-left" : "fade-in-left"} 
        />
        <Card 
        text="Card 4" 
        position={isVisible[3] ? "fade-in-right visible-right" : "fade-in-right"} 
        />
      </div>
    </div>
  );

}

export default App
