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
    image: "/images/icondekstop/bgungu.png",
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
          <article key={project.id} className={`relative group border rounded-lg shadow-md flex flex-col items-start w-full max-w-xs mx-auto ${index === 3 ? "md:col-start-1" : ""}`} aria-label={`Project ${project.title}`}>
            <figure className="w-full">
              <Image src={project.image} alt={`Tampilan ${project.title}`} width={500} height={300} className="w-full h-32 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" priority={index === 0} />
            </figure>

            {/* Overlay Info: muncul dari bawah saat hover */}
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-black/50 backdrop-blur-md text-white px-4 py-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-1">{project.category}</span>
              <p className="text-sm mt-2">{project.description}</p>
            </div>

            <div className="px-4 py-6">
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
    </section>
  );
};

export default ProjectWeb;
