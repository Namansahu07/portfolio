import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/ExampleCarouselImage.png';
import tingdong from '../assets/tingdong.png';
import packers from '../assets/packers.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
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
      <div style={{overflow: "hidden", backgroundColor: "#f8f9fa"}}>
        <Carousel fade>
          <Carousel.Item style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img style={{height: "auto", width: "auto", maxHeight: "80vh", maxWidth: "100%"}} src={ExampleCarouselImage} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img style={{height: "auto", width: "auto", maxHeight: "80vh", maxWidth: "100%"}} src={tingdong} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img style={{height: "auto", width: "auto", maxHeight: "80vh", maxWidth: "100%"}} src={packers} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="parallax-section cards-section" >
        <div className="cards-section-content">
          <h2 className="section-title" style={titleStyle}>My Projects</h2>
          <div className="cards-container">
            <Card className="project-card">
              <Card.Img src={ExampleCarouselImage} />
              <Card.Body>
                <Card.Title>Numerology</Card.Title>
                <Card.Text>
                  Personalized app that analyzes birth dates and names to reveal personality traits and life path numbers. Built with React.
                </Card.Text>
                <div className="card-buttons">
                  <a href={projectLinks.numerology.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Demo</a>
                  <a href={projectLinks.numerology.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                </div>
              </Card.Body>
            </Card>
            
            <Card className="project-card">
              <Card.Img src={tingdong} />
              <Card.Body>
                <Card.Title>Ting Dong</Card.Title>
                <Card.Text>
                  A "Tinder for Dogs" app where pet owners can find playmates for their furry friends. Developed using React Native.
                </Card.Text>
                <div className="card-buttons">
                  <a href={projectLinks.tingDong.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Demo</a>
                  <a href={projectLinks.tingDong.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                </div>
              </Card.Body>
            </Card>
            
            <Card className="project-card">
              <Card.Img src={packers} />
              <Card.Body>
                <Card.Title>Packers & Movers</Card.Title>
                <Card.Text>
                  Relocation service platform connecting users with verified movers and providing real-time shipment tracking. Built with React.
                </Card.Text>
                <div className="card-buttons">
                  <a href={projectLinks.packers.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Demo</a>
                  <a href={projectLinks.packers.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Projects
