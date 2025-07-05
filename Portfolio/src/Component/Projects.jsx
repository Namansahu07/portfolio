import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/ExampleCarouselImage.png';
import tingdong from '../assets/tingdong.png';
import packers from '../assets/packers.png';

import './Projects.css';
import Forms from './Forms';

const Projects = () => {
  // Background style for parallax sections
  const carouselBg = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
  };

  // Custom style for title spacing
  const titleStyle = {
    marginTop: '15px',
    marginBottom: '25px'
  };

  // Carousel state
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Project links - you can update these later
  const projectLinks = {
    numerology: {
      demo: "https://glittering-crumble-c39134.netlify.app/",
      github: "https://github.com/Namansahu07/Numerology-Web-App-"
    },
    tingDong: {
      demo: "https://marvelous-sopapillas-b9f61f.netlify.app/",
      github: "https://github.com/Namansahu07/Tingdog-project"
    },
    packers: {
      demo: "https://lustrous-marigold-210758.netlify.app/",
      github: "https://github.com/Namansahu07/Project-3-"
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (

    <div className="projects-container">
      <div style={{ overflow: "hidden", backgroundColor: "#f8f9fa" }}>
        <Carousel fade>
          <Carousel.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img style={{ height: "auto", width: "auto", maxHeight: "80vh", maxWidth: "100%" }} src={ExampleCarouselImage} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img style={{ height: "auto", width: "auto", maxHeight: "80vh", maxWidth: "100%" }} src={tingdong} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img style={{ height: "auto", width: "auto", maxHeight: "80vh", maxWidth: "100%" }} src={packers} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="parallax-section cards-section">
        <div className="cards-section-content">
          <div className="projects-header-row">
            <h2 className="section-title">My Projects</h2>
            <button className="projects-all-btn">All Projects &rarr;</button>
          </div>
          <div className="cards-container">
            {/* Card 1 */}
            <div className="modern-project-card">
              <div className="modern-project-img-wrap">
                <img src={ExampleCarouselImage} alt="Numerology" className="modern-project-img" />
              </div>
              <div className="modern-project-badges-row">
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>website</span>
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>PRODUCT</span>
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>INTERNSHIP</span>

              </div>
              <div className="modern-project-title">Numerology</div>
              <div className="modern-project-desc">Built a fully responsive web application featuring 5+ numerology calculators. Enhanced
                user experience through dynamic form handling,and modalbased flows like “Book Appointment” and “Ask Your Questions.”</div>
              <a href="https://glittering-crumble-c39134.netlify.app/" target="_blank" rel="noopener noreferrer" className="modern-project-btn">DM for walkthrough</a>
            </div>
            {/* Card 2 */}
            <div className="modern-project-card">
              <div className="modern-project-img-wrap">
                <img src={tingdong} alt="Brio" className="modern-project-img" />
              </div>
              <div className="modern-project-badges-row">
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>Project</span>
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>WEBSITE</span>
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>TINDER</span>
              </div>
              <div className="modern-project-title">TingDog</div>
              <div className="modern-project-desc">Developed Tingdog, a fun and engaging Tinder-like web application for dogs, designed to help pet owners connect their furry friends. It’s built using HTML and CSS with a playful, responsive interface.</div>
              <a href="https://marvelous-sopapillas-b9f61f.netlify.app/" target="_blank" rel="noopener noreferrer" className="modern-project-btn">View this Project</a>
            </div>
            {/* Card 3 */}
            <div className="modern-project-card">
              <div className="modern-project-img-wrap">
                <img src={packers} alt="Traffic Signal Optimisation" className="modern-project-img" />
              </div>
              <div className="modern-project-badges-row">
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>DASHBOARD</span>
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>WEBSITE</span>
                <span className="modern-project-badge" style={{ color: '#fff', background: '#232323' }}>UI</span>
              </div>
              <div className="modern-project-title">Packers and Movers</div>
              <div className="modern-project-desc">Packers and Movers website to streamline the process of booking relocation services. It features a user-friendly layout and essential service details, built using modern web technologies.</div>
              <a href="https://lustrous-marigold-210758.netlify.app/" target="_blank" rel="noopener noreferrer" className="modern-project-btn">View this Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
