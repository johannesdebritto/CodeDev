"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimoni = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const images = [
    { src: "/images/icondekstop/komen1.svg", alt: "Testimoni pelanggan 1" },
    { src: "/images/icondekstop/komen2.svg", alt: "Testimoni pelanggan 2" },
    { src: "/images/icondekstop/komen3.svg", alt: "Testimoni pelanggan 3" },
    { src: "/images/icondekstop/komen1.svg", alt: "Testimoni pelanggan 4" },
    { src: "/images/icondekstop/komen2.svg", alt: "Testimoni pelanggan 5" },
  ];

  const getPosition = (index: number) => {
    const distance = (index - activeIndex + images.length) % images.length;
    const base = windowWidth <= 768 ? 100 : 160;

    switch (distance) {
      case 0:
        return {
          x: "0%",
          scale: 1.1,
          zIndex: 5,
          opacity: 1,
        };
      case 1:
        return {
          x: `-${base}%`,
          scale: 0.85,
          zIndex: 3,
          opacity: 0.6,
        };
      case 2:
        return {
          x: `-${base * 2}%`,
          scale: 0.75,
          zIndex: 2,
          opacity: 0.4,
        };
      case 3:
        return {
          x: `${base * 2}%`,
          scale: 0.75,
          zIndex: 2,
          opacity: 0.4,
        };
      case 4:
        return {
          x: `${base}%`,
          scale: 0.85,
          zIndex: 3,
          opacity: 0.6,
        };
      default:
        return { opacity: 0 };
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: "url('/images/icondekstop/bgkomen.svg')" }} aria-labelledby="testimonial-heading">
      <div className="text-center text-white mb-12">
        <h2 id="testimonial-heading" className="text-4xl font-bold">
          Testimoni Kustomer Kami
        </h2>
      </div>

      <div className="relative flex items-center justify-center h-[300px] overflow-hidden">
        {images.map((image, index) => {
          const positionStyle = getPosition(index);
          return (
            <motion.figure
              key={index}
              className="absolute transition-all duration-500"
              animate={positionStyle}
              style={{
                width: windowWidth <= 768 ? "150px" : "200px",
              }}
            >
              <Image src={image.src} alt={image.alt} width={300} height={300} className="rounded-lg w-full h-auto" priority={index === activeIndex} />
            </motion.figure>
          );
        })}
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
