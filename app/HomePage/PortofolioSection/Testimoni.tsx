"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimoni = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const images = [
    { src: "/images/icondekstop/komen1.svg", alt: "Testimoni dari pelanggan 1" },
    { src: "/images/icondekstop/komen2.svg", alt: "Testimoni dari pelanggan 2" },
    { src: "/images/icondekstop/komen3.svg", alt: "Testimoni dari pelanggan 3" },
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
    setPositionIndexes((prev) => prev.map((i) => (i + 2) % 3));
  };

  const handleNext = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 1) % 3));
  };

  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: "url('/images/icondekstop/bgkomen.svg')" }} aria-labelledby="testimonial-heading">
      <div className="text-center text-white mb-8">
        <h2 id="testimonial-heading" className="text-4xl font-bold">
          Testimoni Kustomer Kami
        </h2>
      </div>

      <div className="relative flex items-center justify-center h-[400px]">
        {images.map((image, index) => (
          <motion.figure
            key={index}
            className="absolute"
            initial="center"
            animate={windowWidth <= 768 ? positionsMobile[positionIndexes[index]] : positionsDesktop[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: windowWidth <= 768 ? "80%" : "30%" }}
          >
            <Image src={image.src} alt={image.alt} width={windowWidth <= 768 ? 500 : 350} height={windowWidth <= 768 ? 500 : 350} className="rounded-lg" priority={index === 0} />
          </motion.figure>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button aria-label="Sebelumnya" className="transition-transform transform hover:scale-110" onClick={handlePrev}>
          <Image src="/images/icondekstop/panah1.svg" alt="Tombol sebelumnya" width={45} height={45} />
        </button>
        <button aria-label="Selanjutnya" className="transition-transform transform hover:scale-110" onClick={handleNext}>
          <Image src="/images/icondekstop/panah2.svg" alt="Tombol selanjutnya" width={45} height={45} />
        </button>
      </div>
    </section>
  );
};

export default Testimoni;
