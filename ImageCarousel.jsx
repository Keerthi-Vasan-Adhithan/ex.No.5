import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const images = [img1, img2, img3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="carousel" />
      <div className="controls">
        <button onClick={prevImage}>⟨ Prev</button>
        <button onClick={nextImage}>Next ⟩</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
