// components/Portofolio.js
import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Porto1",
    category: "Website",
    description: "Website porto1",
    image: "/images/icondekstop/bgungu.png",
  },
  {
    id: 2,
    title: "Porto2",
    category: "Website",
    description: "Website porto2",
    image: "/images/icondekstop/bgbiru.png",
  },
  {
    id: 3,
    title: "Porto3",
    category: "Website",
    description: "Website porto3",
    image: "/images/icondekstop/bgpink.png",
  },
];

const Portofolio = () => {
  return (
    <section id="portfolio" className="scroll-offset bg-white max-w-7xl mx-auto px-4 py-12" aria-labelledby="portfolio-heading">
      {/* Judul */}
      <h2 id="portfolio-heading" className="text-center text-2xl font-bold text-gray-800 mb-8">
        PROYEK YANG CODE<span className="text-blue-600">DEV</span> PERNAH KERJAKAN
      </h2>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article key={project.id} className="border rounded-lg shadow-md flex flex-col items-start w-full max-w-xs mx-auto">
            {/* Gambar Proyek */}
            <Image
              src={project.image}
              alt={`Tampilan ${project.title} - ${project.description}`}
              width={400}
              height={200}
              className="w-full h-32 object-cover rounded-t-lg"
              priority={index === 0} // hanya yang pertama diberi priority
            />

            {/* Detail Project */}
            <div className="px-4 py-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4 inline-block">{project.category}</span>
              <p className="text-gray-600 text-sm mb-3 mt-2">{project.description}</p>

              {/* Tombol Lihat Studi Case */}
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-3 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Lihat Studi Case</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Tombol Lihat Project Lain */}
      <div className="mt-8 text-center">
        <a
          href="#_"
          className="relative px-5 py-3 overflow-hidden group text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform transform hover:scale-105 ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Lihat Project Lainnya</span>
        </a>
      </div>
    </section>
  );
};

export default Portofolio;
