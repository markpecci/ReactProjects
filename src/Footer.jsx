import React from 'react';
import './Footer.css'; // Import styles for the footer

function Footer({position}) {
  return (
    <footer className={`footer ${position}`}>
      <nav className="footer-nav">
        <ul>
          <li><a href="#section1">Projects</a></li>
          <li><a href="#section2">Contact Me</a></li>
          <li><a href="#section3">Fun Stuff</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
