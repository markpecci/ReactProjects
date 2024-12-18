import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [scrollPos, setScrollPos] = useState(0); // To track scroll position
  const[isVisible, setIsVisible] = useState([false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPos(currentScroll);

      // Update visibility for cards based on scroll position
      const newVisibility = [
        scrollPos > 300, // Card 1 becomes visible after 300px
        scrollPos > 600, // Card 2 becomes visible after 600px
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
      </div>
    </div>
  );

}

export default App
