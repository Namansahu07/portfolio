import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container education-after-projects">
      <div className="education-header">
        <h2 className="section-title">My Education</h2>
      </div>
      
      <div className="education-content">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Bachelor of Technology</h3>
              <h4>Computer Science Engineering</h4>
              <p className="institution">Delhi Technological University</p>
              <p className="years">2020 - 2024</p>
              <p className="description">
                Studied core computer science subjects including Data Structures, Algorithms, 
                Database Management Systems, Operating Systems, and Web Development.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Higher Secondary Education</h3>
              <h4>Science Stream</h4>
              <p className="institution">Delhi Public School</p>
              <p className="years">2018 - 2020</p>
              <p className="description">
                Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Secondary Education</h3>
              <p className="institution">Delhi Public School</p>
              <p className="years">2016 - 2018</p>
              <p className="description">
                Completed secondary education with excellence in Mathematics and Science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 