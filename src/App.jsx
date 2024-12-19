import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [scrollPos, setScrollPos] = useState(0); // To track scroll position
  const[isVisible, setIsVisible] = useState([false, false, false, false]);

  //TODO: make cards in a map and have them more efficiently stored / added
  
  const cardsData = [
    { id: 1, text: 'Card 1', positionClass: 'fade-in-left' },
    { id: 2, text: 'Card 2', positionClass: 'fade-in-right' },
    // You can add more cards here as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling detected! Current scroll position:', window.scrollY);
      const currentScroll = window.scrollY;
      setScrollPos(currentScroll);

      // Update visibility for cards based on scroll position
      const newVisibility = [
        currentScroll > 150 && currentScroll < 799, 
        currentScroll > 800 && currentScroll < 1449, 
        currentScroll > 1450 && currentScroll < 2099, 
        currentScroll > 2100 && currentScroll < 2749, 
      ];
      setIsVisible(newVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    

  return (
    <div>
      <h1>Mark Pecci's Website</h1>
      <div className="card_container">
        <Card         
        title="Card 1" 
        text="This is what I want in the first card"
        position={isVisible[0] ? "fade-in-left visible-left" : "fade-in-left"} 
        />
        <Card 
        title="Card 2" 
        text="This is what I want in the second card"
        position={isVisible[1] ? "fade-in-right visible-right" : "fade-in-right"} 
        />
        <Card 
        title="Card 3" 
        text="This is what I want in the third card"
        position={isVisible[2] ? "fade-in-left visible-left" : "fade-in-left"} 
        />
        <Card 
        title="Card 4" 
        text="This is what I want in the fourth card"
        position={isVisible[3] ? "fade-in-right visible-right" : "fade-in-right"} 
        />
      </div>
    </div>
  );

}

export default App
