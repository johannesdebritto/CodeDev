// components/ProjectWeb.tsx
import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Maggot BSF Colomadu",
    category: "Website",
    description: "Sistem informasi berbasis web untuk pengelolaan peternakan maggot di Colomadu.",
    image: "/images/icondekstop/bgungu.png",
  },
  {
    id: 2,
    title: "Scan Arang EENT",
    category: "Aplikasi",
    description: "Aplikasi mobile untuk pemindaian dan manajemen produksi arang menggunakan teknologi EENT.",
    image: "/images/icondekstop/bgungu.png",
  },
  {
    id: 3,
    title: "Azzimuth Tracker",
    category: "Aplikasi",
    description: "Aplikasi pelacak azimut untuk keperluan astronomi dan navigasi berbasis sensor perangkat.",
    image: "/images/icondekstop/bgungu.png",
  },
  {
    id: 4,
    title: "Dompetku",
    category: "Aplikasi",
    description: "Dompet digital dengan fitur pencatatan keuangan pribadi dan pengingat transaksi.",
    image: "/images/andro3.png", // Gambar baru untuk card keempat
  },
];

const ProjectWeb = () => {
  return (
    <section id="portfolio" className="scroll-offset bg-white max-w-7xl mx-auto px-4 py-12 pt-24 md:pt-32">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        PROYEK YANG CODE<span className="text-blue-600">DEV</span> PERNAH KERJAKAN
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article key={project.id} className="relative group w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-md">
            {/* Gambar full */}
            <Image src={project.image} alt={`Tampilan ${project.title}`} width={400} height={200} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" priority={index === 0} />

            {/* Overlay dengan animasi saat hover */}
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-black/50 backdrop-blur-md text-white px-4 py-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-1">{project.category}</span>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectWeb;
