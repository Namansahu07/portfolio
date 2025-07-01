import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import python from "../assets/python.jpg";
import node from "../assets/node.jpg";
import express from "../assets/expres.jpg";
import sql from "../assets/sql.jpg";

export const DragCards = ({ constraintRef }) => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden overflow-block=hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font color-white text-white md:text-[200px]">
        Backend<span className="text-indigo-500">.</span>
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
        src={express}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="55%"
        className="w-8 md:w-10"
      />
      <Card
        constraintRef={constraintRef}
        src={node}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-10 md:w-12"
      />
      <Card
        constraintRef={constraintRef}
        src={sql}
        alt="Example image"
        rotate="18deg"
        top="30%"
        left="60%"
        className="w-10 md:w-12"
      />
      <Card
        constraintRef={constraintRef}
        src={python}
        alt="Example image"
        rotate="-3deg"
        top="55%"
        left="50%"
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

export default DragCards;