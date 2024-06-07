import React, { useState } from 'react';
import './Slider.css';

const images = [
  'image1.jpg', // Replace with actual image paths
  'image2.jpg',
  'image3.jpg'
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (step) => {
    const newSlide = currentSlide + step;
    if (newSlide >= 0 && newSlide < images.length) {
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)} disabled={currentSlide === 0}>
          &#10094;
        </button>
        <button className="next" onClick={() => moveSlide(1)} disabled={currentSlide === images.length - 1}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
