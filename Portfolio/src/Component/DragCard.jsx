import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import ts from "../assets/ts.jpg";

export const DragCards = ({ constraintRef }) => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden overflow-block=hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-white 700 md:text-[200px]">
        Frontend<span className="text-indigo-500">.</span>
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
        src={css}
        alt="Example image"
        rotate="6deg"
        top="35%"
        left="40%"
        className="w-10 md:w-12"
      />
      <Card
        constraintRef={constraintRef}
        src={html}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="55%"
        className="w-8 md:w-10"
      />
      <Card
        constraintRef={constraintRef}
        src={js}
        alt="Example image"
        rotate="-6deg"
        top="25%"
        left="45%"
        className="w-12 md:w-14"
      />
      <Card
        constraintRef={constraintRef}
        src={ts}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-10 md:w-12"
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
      dragElastic={0.65}
    />
  );
};

export default DragCards;