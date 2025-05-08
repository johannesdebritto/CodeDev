"use client";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    image: "/images/card/step1.svg",
    alt: "Langkah 1: Konsultasi Kebutuhan Proyek",
  },
  {
    id: 2,
    image: "/images/card/step2.svg",
    alt: "Langkah 2: Perencanaan dan Desain",
  },
  {
    id: 3,
    image: "/images/card/step3.svg",
    alt: "Langkah 3: Pengembangan dan Uji Coba",
  },
  {
    id: 4,
    image: "/images/card/step4.svg",
    alt: "Langkah 4: Peluncuran dan Pemeliharaan",
  },
];

const AlurPembuatan = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const itemWidth = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  return (
    <section className="bg-white max-w-7xl mx-auto px-4 py-12" aria-labelledby="alur-heading">
      <header>
        <h2 id="alur-heading" className="text-center text-3xl font-bold text-gray-800 mb-10">
          Alur Pembuatan <span className="text-blue-600">Project</span>
        </h2>
      </header>

      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible" onScroll={handleScroll} role="region" aria-label="Langkah-langkah pembuatan proyek">
        {steps.map((step, index) => (
          <article key={step.id} className="flex-shrink-0 w-full snap-center flex justify-center md:flex-shrink md:w-auto" style={{ flexBasis: "100%" }} aria-label={`Langkah ${step.id}`}>
            <Image src={step.image} alt={step.alt} width={250} height={250} priority={index === 0} className="object-contain" />
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2 md:hidden" aria-label="Navigasi langkah">
        {steps.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-300"} transition-all`} aria-label={`Indikator langkah ${index + 1}`}></div>
        ))}
      </div>
    </section>
  );
};

export default AlurPembuatan;
