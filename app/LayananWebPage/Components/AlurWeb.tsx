"use client";
import { useState } from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    image: '/images/card/step1.svg',
  },
  {
    id: 2,
    image: '/images/card/step2.svg',
  },
  {
    id: 3,
    image: '/images/card/step3.svg',
  },
  {
    id: 4,
    image: '/images/card/step4.svg',
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
    <section className="bg-white max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Alur Pembuatan <span className="text-blue-600">Project</span>
      </h2>
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible"
        onScroll={handleScroll}
      >
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex-shrink-0 w-full snap-center flex justify-center md:flex-shrink md:w-auto"
            style={{ flexBasis: '100%' }}
          >
            <Image
              src={step.image}
              alt={`Step ${step.id}`}
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2 md:hidden">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            } transition-all`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default AlurPembuatan;
