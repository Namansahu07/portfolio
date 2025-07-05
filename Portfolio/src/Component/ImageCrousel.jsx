import React from "react";
import "./ImageCarousel.css";
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import img6 from '../assets/image6.jpg';
import img7 from '../assets/image7.jpg';
import img8 from '../assets/image8.jpg';
import img9 from '../assets/image9.jpg';
import img10 from '../assets/image10.jpg';
import img11 from '../assets/image11.jpg';
import img12 from '../assets/image12.jpg';
import img13 from '../assets/image13.jpg';
import img14 from '../assets/image14.jpg';
import img15 from '../assets/image15.jpg';
import img16 from '../assets/image16.jpg';
const topImages = [img1, img2, img3, img4, img5,img6, img7,img8];
const bottomImages = [img9,img10,img11,img12,img13,img14,img15,img16];

const ImageCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">All things fun about me!</h2>

      {/* Top Row */}
      <div className="carousel-row top-scroll">
        <div className="fade-left" />
        <div className="carousel-track">
          {[...Array(2)].map((_, loopIndex) =>
            topImages.map((src, i) => (
              <div
                className={`image-card ${i % 2 === 0 ? 'vertical' : 'horizontal'}`}
                key={`top-${loopIndex}-${i}`}
              >
                <img src={src} alt={`top-carousel-${loopIndex}-${i}`} />
              </div>
            ))
          )}
        </div>
        <div className="fade-right" />
      </div>

      {/* Bottom Row */}
      <div className="carousel-row bottom-scroll">
        <div className="fade-left" />
        <div className="carousel-track reverse">
          {[...Array(2)].map((_, loopIndex) =>
            bottomImages.map((src, i) => (
              <div
                className={`image-card ${i % 2 === 0 ? 'vertical' : 'horizontal'}`}
                key={`bottom-${loopIndex}-${i}`}
              >
                <img src={src} alt={`bottom-carousel-${loopIndex}-${i}`} />
              </div>
            ))
          )}
        </div>
        <div className="fade-right" />
      </div>
    </div>
  );
};

export default ImageCarousel;
