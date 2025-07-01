import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import python from "../assets/python.jpg";  
import react from "../assets/react.png";
import angular from "../assets/angular.png";
import vue from "../assets/vue.png";
import boot from "../assets/boot.png";

export const DragCards3 = ({ constraintRef }) => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden overflow-block=hidden bg-neutral-950">
      <h2 className="relative z-0 text-[18vw] font color-white text-white md:text-[180px]">
        Frameworks<span className="text-indigo-500">.</span>
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
      src={react}
      alt="Example image"
      rotate="12deg"
      top="50%"
      left="10%"
      className="w-8 md:w-10"
    />
    <Card
      constraintRef={constraintRef}
      src={angular}
      alt="Example image"
      rotate="2deg"
      top="50%"
      left="35%"
      className="w-15 md:w-12"
    />
    <Card
      constraintRef={constraintRef}
      src={vue}
      alt="Example image"
      rotate="1deg"
      top="50%"
      left="76%"
      className="w-10 md:w-12"
    />
    <Card
      constraintRef={constraintRef}
      src={boot}
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

export default DragCards3;