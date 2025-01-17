"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ImageCarousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 3);
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 2) % 3);
      return updatedIndexes;
    });
  };

  const images = [
    { src: "/images/komen1.png", alt: "Customer 1" },
    { src: "/images/komenn.png", alt: "Customer 2" },
    { src: "/images/komen3.png", alt: "Customer 3" },
  ];

  const positions = ["center", "left", "right"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-50%", scale: 0.7, zIndex: 3 },
    right: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image.src}
          alt={image.alt}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "20%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
