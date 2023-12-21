// src/components/ImageSlider.js

import React, { useState, useEffect } from 'react';
import './Header.css'; // Create this CSS file to style your slideshow

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require('./imgs/suvidha1.png'),
    require('./imgs/suvidha22.png'),
    require('./imgs/suvidha3.png'),
  ];

  useEffect(() => {
    // Set up a timer to change the image every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button>DONATE NOW</button>
    </div>
  );
};

export default Header;
