import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Maggot BSF Colomadu",
    category: "Website",
    description: "Sistem informasi berbasis web untuk pengelolaan peternakan maggot di Colomadu.",
    image: "/images/web.png",
  },
  {
    id: 2,
    title: "Scan Arang EENT",
    category: "Aplikasi",
    description: "Aplikasi mobile untuk pemindaian dan manajemen produksi arang menggunakan teknologi EENT.",
    image: "/images/andro1.png",
  },
  {
    id: 3,
    title: "Azzimuth Tracker",
    category: "Aplikasi",
    description: "Aplikasi pelacak azimut untuk keperluan astronomi dan navigasi berbasis sensor perangkat.",
    image: "/images/andro2.png",
  },
];

const Portofolio = () => {
  return (
    <section id="portfolio" className="scroll-offset bg-white max-w-7xl mx-auto px-4 py-20" aria-labelledby="portfolio-heading">
      {/* Judul */}
      <h2 id="portfolio-heading" className="text-center text-2xl font-bold text-gray-800 mb-8">
        PROYEK YANG CODE<span className="text-blue-600">DEV</span> PERNAH KERJAKAN
      </h2>

      {/* Grid Project */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article key={project.id} className="relative group w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-md">
            {/* Full Gambar */}
            <Image src={project.image} alt={`Tampilan ${project.title}`} width={400} height={200} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" priority={index === 0} />

            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-black/50 backdrop-blur-md text-white px-4 py-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-1">{project.category}</span>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Tombol Lihat Project Lainnya */}
      <div className="mt-8 text-center">
        <Link
          href="/PortofolioPage"
          className="relative px-5 py-3 overflow-hidden group text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform transform hover:scale-105 ease-out duration-300 inline-block"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Lihat Project Lainnya</span>
        </Link>
      </div>
    </section>
  );
};

export default Portofolio;
