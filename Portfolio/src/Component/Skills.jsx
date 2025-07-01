import React, { useRef } from 'react';
import './Skills.css';
import Forms from './Forms';
import DragCards from './DragCard';
import DragCards2 from './Dragcard2';
import DragCards3 from './DragCard3';
import DragCards4 from './DragCard4';


const Skills = () => {
  const skillSectionRef = useRef(null);
  const skillSectionRef2 = useRef(null);
  const frameworkSectionRef = useRef(null);
  const ToolsectionRef = useRef(null);

  return (
    <>
      <div className='Skilluppersection' ref={skillSectionRef}>
        <DragCards constraintRef={skillSectionRef} />
      </div>
      <div className='Skilluppersection2' ref={skillSectionRef2}>
        <DragCards2 constraintRef={skillSectionRef2} />
      </div>
      <div className='Frameworksection' ref={frameworkSectionRef}>
        <DragCards3 constraintRef={frameworkSectionRef}/>
      </div>
      <div className='Toolsection' ref={ToolsectionRef}>
      <DragCards4 constraintRef={ToolsectionRef}/>
      </div>
      <div className='Skilluppersection3'>
        <Forms/>
      </div>
    </>
  );
}

export default Skills;

