import React, { useState, useEffect } from 'react';
import Naman from '../assets/Naman.jpeg';
import Naman2 from '../assets/Naman2.jpeg';
import '../Component/About_me.css';
import ResumePDF from '../assets/Resume.pdf';

const AboutMe = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // Which sentence
  const [charIndex, setCharIndex] = useState(0); // Which character
  const [displayedText, setDisplayedText] = useState(''); // What's shown

  const [fade, setFade] = useState(true);
  const images = [Naman, Naman2];

  const handleResumeClick = () => {
    window.open(ResumePDF, '_blank');
  };

  const texts = [
    'I am a Web Developer',
    'I am a React Developer',
    'Welcome to my portfolio',
  ];

  // Logic for typing effect
  useEffect(() => {
    const typingSpeed = 100;
    const pauseAfterTyping = 1500;

    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Once sentence is complete, wait and go to next
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseAfterTyping);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts]);

  // Logic for changing images
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000); // 3-second interval

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="AboutMe-container">
        <div className="Leftpanel">
          <h1 className='Chnagecolor'>Hi, I'm<br /><span className="highlight">Naman Sahu</span></h1>
          <br />
          <div className="typing-wrapper">
            <h2 className='typing-text'>{displayedText}<span className="cursor">|</span></h2>
          </div>
          <button className="btn" onClick={handleResumeClick}>RESUME</button>
        </div>

        <div className="Rightpanel">
          <img
            src={images[currentImage] || Naman}
            alt="Profile Slider"
            className={`Profilepic ${fade ? 'fade-in' : 'fade-out'}`}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
