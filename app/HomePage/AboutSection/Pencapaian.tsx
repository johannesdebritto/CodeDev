import React from "react";
import Image from "next/image";

const Pencapaian = () => {
  return (
    <section className="py-10 px-5 sm:px-10 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-x-0 sm:space-x-4">
          <h2 className="text-3xl font-bold text-black flex items-center">
            Pencapaian Code<span className="text-blue-600">Dev</span>
          </h2>
          <Image
            src="/images/icondekstop/piala.svg" // Update with your image path
            alt="Icon Pencapaian"
            width={64} // Adjust the width as needed
            height={64} // Adjust the height as needed
            className="mt-4 sm:mt-0 sm:ml-4 hidden lg:block" // Sembunyikan di layar lg
          />
        </div>
        <p className="text-xl text-gray-900 mb-10 -mt-4">
          CodeDev telah sukses menyelesaikan berbagai proyek digital, mulai dari
          aplikasi mobile hingga website, dengan fokus pada inovasi, kualitas,
          dan kepuasan klien.
        </p>

        {/* Konten Pencapaian */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Kotak 1 - Client */}
          <div
            className="relative flex flex-col items-center text-center p-6 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('images/icondekstop/bgorang.png')",
              minHeight: '180px', // Menetapkan tinggi minimal card
            }}
          >
            <Image
              src="/images/icon/iconorang.svg" // Update with your image path
              alt="Klien Loyal"
              width={48} // Adjust the width as needed
              height={48} // Adjust the height as needed
              className="absolute top-4 left-4"
            />
            <h3 className="text-4xl font-bold text-white absolute top-4 left-28">Client</h3>
            <p className="text-white font-medium mt-12 text-4xl">0</p>
          </div>

          {/* Kotak 2 - Project */}
          <div
            className="relative flex flex-col items-center text-center p-6 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('images/icondekstop/bgproject.png')",
              minHeight: '180px', // Menetapkan tinggi minimal card
            }}
          >
            <Image
              src="/images/icon/iconkepuasan.svg" // Update with your image path
              alt="Project Dibuat"
              width={48} // Adjust the width as needed
              height={48} // Adjust the height as needed
              className="absolute top-4 left-4"
            />
            <h3 className="text-4xl font-bold text-white absolute top-4 left-28">Project</h3>
            <p className="text-white font-medium mt-12 text-4xl">0</p>
          </div>

          {/* Kotak 3 - Kepuasan Klien */}
          <div
            className="relative flex flex-col items-center text-center p-6 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('images/icondekstop/bgkepuasan.png')",
              minHeight: '180px', // Menetapkan tinggi minimal card
            }}
          >
            <Image
              src="/images/icon/iconkepuasan.svg" // Update with your image path
              alt="Kepuasan Klien"
              width={48} // Adjust the width as needed
              height={48} // Adjust the height as needed
              className="absolute top-4 left-4"
            />
            <h3 className="text-4xl font-bold text-white absolute top-4 left-28">Kepuasan</h3>
            <p className="text-white font-medium mt-12 text-4xl">0%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pencapaian;
