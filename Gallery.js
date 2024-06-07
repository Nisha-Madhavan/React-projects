import React from 'react';
import './GallerySection.css';
import image01 from'./image-01.jpg';
import image02 from'./image-02.jpg';
import image03 from'./image-03.jpg';
import image04 from'./image-04.jpg';
import image05 from'./image-05.jpg';
import image06 from'./image-06.jpg';
import image07 from'./image-07.jpg';

const images = [
  {image01},{image02},{image03},{image04},{image05},{image06},{image07}, 
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
    <h2>Section title goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed diam nonummy nibh euismod
      tincidunt ut lacreet dolore magna aliquam erat voluprat</p>
      <div className="gallery">
        {images.map((image, index) => (
          <img src={image} key={index} />
        ))}
      </div>
      <button className="btn primary">Explore now</button>
    </section>
  );
};
  
export default GallerySection;
