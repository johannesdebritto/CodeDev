"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimoni = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Atur ukuran awal window
      setWindowWidth(window.innerWidth);

      // Tambahkan event listener untuk perubahan ukuran window
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      // Cleanup event listener saat komponen dilepas
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const images = [
    { src: "/images/icondekstop/komen1.svg", alt: "Customer 1" },
    { src: "/images/icondekstop/komen2.svg", alt: "Customer 2" },
    { src: "/images/icondekstop/komen3.svg", alt: "Customer 3" },
  ];

  const positionsDesktop = ["center", "left", "right"];
  const positionsMobile = ["center", "hidden", "hidden"];

  const imageVariants = {
    center: { x: "0%", scale: 1.3, zIndex: 5, opacity: 1 },
    left: { x: "-90%", scale: 1, zIndex: 3, opacity: 0.5 },
    right: { x: "90%", scale: 1, zIndex: 3, opacity: 0.5 },
    hidden: { opacity: 0, x: "0%", scale: 0 },
  };

  const handlePrev = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 2) % 3)
    );
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 3)
    );
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: "url('/images/icondekstop/bgkomen.svg')" }}
    >
      <div className="text-center text-white mb-8">
        <h2 className="text-4xl font-bold">Testimoni Kustomer Kami</h2>
      </div>

      <div className="relative flex items-center justify-center h-[400px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial="center"
            animate={windowWidth <= 768 ? positionsMobile[positionIndexes[index]] : positionsDesktop[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: windowWidth <= 768 ? "80%" : "30%" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={windowWidth <= 768 ? 500 : 350}
              height={windowWidth <= 768 ? 500 : 350}
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button
          className="transition-transform transform hover:scale-110"
          onClick={handlePrev}
        >
          <Image
            src="/images/icondekstop/panah1.svg"
            alt="Button 1"
            width={45}
            height={45}
          />
        </button>
        <button
          className="transition-transform transform hover:scale-110"
          onClick={handleNext}
        >
          <Image
            src="/images/icondekstop/panah2.svg"
            alt="Button 2"
            width={45}
            height={45}
          />
        </button>
      </div>
    </div>
  );
};

export default Testimoni;
