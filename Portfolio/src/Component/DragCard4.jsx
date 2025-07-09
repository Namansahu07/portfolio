import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge"; 
import git from "../assets/git.png"
import wp from "../assets/wp.png";
import vsc from "../assets/vsc.png";
import gith from "../assets/gith.png"

export const DragCards4 = ({ constraintRef }) => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden overflow-block=hidden bg-neutral-950">
      <h2 className="relative z-0 text-[19vw] font color-white text-white md:text-[180px]">
   Tools<span className="text-indigo-500">.</span>
      </h2>
      <Cards constraintRef={constraintRef} />
    </section>
  );
};

const Cards = ({ constraintRef }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      
    <Card
      constraintRef={constraintRef}
      src={git}
      alt="Example image"
      rotate="12deg"
      top="50%"
      left="10%"
      className="w-8 md:w-10"
    />
    <Card
      constraintRef={constraintRef}
      src={gith}
      alt="Example image"
      rotate="2deg"
      top="50%"
      left="35%"
      className="w-15 md:w-12"
    />
    <Card
      constraintRef={constraintRef}
      src={wp}
      alt="Example image"
      rotate="0deg"
      top="50%"
      left="76%"
      className="w-10 md:w-12"
    />
    <Card
      constraintRef={constraintRef}
      src={vsc}
      alt="Example image"
      rotate="-3deg"
      top="53%"
      left="58%"
      className="w-8 md:w-10"
    />
  </div>
  );
};

const Card = ({ constraintRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
        width: '200px',
        height: 'auto',
        maxWidth: '100%'
      }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={constraintRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.25}
    />
  );
};

export default DragCards4;