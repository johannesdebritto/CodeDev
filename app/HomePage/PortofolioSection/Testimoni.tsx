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
    const spacing = windowWidth <= 768 ? 70 : 80; // diperpendek jaraknya

    switch (distance) {
      case 0:
        return { x: "0%", scale: 1.25, zIndex: 5, opacity: 1 };
      case 1:
        return { x: `-${spacing}%`, scale: 1.05, zIndex: 3, opacity: 0.8 };
      case 2:
        return { x: `-${spacing * 2}%`, scale: 0.9, zIndex: 2, opacity: 0.6 };
      case 3:
        return { x: `${spacing * 2}%`, scale: 0.9, zIndex: 2, opacity: 0.6 };
      case 4:
        return { x: `${spacing}%`, scale: 1.05, zIndex: 3, opacity: 0.8 };
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

      <div className="relative flex items-center justify-center h-[320px] md:h-[400px] overflow-hidden">
        {images.map((image, index) => {
          const positionStyle = getPosition(index);
          return (
            <motion.figure
              key={index}
              className="absolute transition-all duration-500"
              animate={positionStyle}
              style={{
                width: windowWidth <= 768 ? "150px" : "230px",
              }}
            >
              <Image src={image.src} alt={image.alt} width={300} height={300} className="rounded-xl w-full h-auto shadow-lg" priority={index === activeIndex} />
            </motion.figure>
          );
        })}
      </div>

      <div className="flex justify-center mt-10 gap-4">
        <button aria-label="Sebelumnya" className="transition-transform transform hover:scale-110" onClick={handlePrev}>
          <Image src="/images/icondekstop/panah1.svg" alt="Tombol sebelumnya" width={40} height={40} />
        </button>
        <button aria-label="Selanjutnya" className="transition-transform transform hover:scale-110" onClick={handleNext}>
          <Image src="/images/icondekstop/panah2.svg" alt="Tombol selanjutnya" width={40} height={40} />
        </button>
      </div>
    </section>
  );
};

export default Testimoni;
