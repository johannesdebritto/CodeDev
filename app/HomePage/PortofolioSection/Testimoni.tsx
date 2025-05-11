"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimoni = () => {
  const [windowWidth, setWindowWidth] = useState(0);

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

  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: "url('/images/icondekstop/bgkomen.svg')" }} aria-labelledby="testimonial-heading">
      <div className="text-center text-white mb-12">
        <h2 id="testimonial-heading" className="text-4xl font-bold">
          Testimoni Kustomer Kami
        </h2>
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        {images.map((image, index) => (
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              width: windowWidth <= 768 ? "140px" : "200px",
            }}
          >
            <Image src={image.src} alt={image.alt} width={300} height={300} className="rounded-lg w-full h-auto" priority={index === 0} />
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Testimoni;
